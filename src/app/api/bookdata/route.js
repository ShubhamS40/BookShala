import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { IncomingForm } from "formidable";
import cloudinary from "cloudinary";
import { Readable } from "stream";

// Initialize Prisma Client
const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch data from the 'book' model
    const data = await prisma.book.findMany();
    
    // Return the fetched data as JSON
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching books:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  } finally {
    // Ensure that the Prisma Client is disconnected after the request
    await prisma.$disconnect();
  }
}







// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: "dsgd8zlaa",
  api_key: "317624556574113",
  api_secret: "83PoY_zav0p_hxKqEsMFAnUbFFY",
});

export const config = {
  api: {
    bodyParser: false, // Disable Next.js's default body parsing
  },
};

// Helper function to convert Next.js `Request` to a Node.js-readable stream with headers
const convertToNodeReadable = async (req) => {
  const readable = new Readable();
  readable._read = () => {}; // No-op _read method

  // Convert ArrayBuffer to Buffer before pushing to the stream
  const buffer = Buffer.from(await req.arrayBuffer());
  readable.push(buffer);
  readable.push(null);

  // Add headers and method to mimic a Node.js IncomingMessage
  readable.headers = Object.fromEntries(req.headers.entries());
  readable.method = req.method;

  return readable;
};

// Parse form data, including file upload
const parseForm = async (req) => {
  return new Promise(async (resolve, reject) => {
    const nodeReq = await convertToNodeReadable(req);
    const form = new IncomingForm({ uploadDir: "/tmp", keepExtensions: true });
    form.parse(nodeReq, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

export async function POST(req) {
  try {
    const { fields, files } = await parseForm(req);

    // Log the entire fields object to debug the incoming form data
    console.log("Fields received:", fields);

    // Extract form fields and validate (ensuring each field is a string)
    const bookName = fields.bookName && fields.bookName[0];
    const description = fields.description && fields.description[0];
    const authorName = fields.authorName && fields.authorName[0];
    const price = fields.price && fields.price[0];
    const rating = fields.rating && fields.rating[0];
    let categoryName = fields.categoryName && fields.categoryName[0]; // Ensure it's a string

    // Remove any surrounding quotes from categoryName if necessary
    if (categoryName) {
      categoryName = categoryName.replace(/"/g, ''); // Remove quotes
    }

    if (!bookName || !description || !authorName || !price || !rating || !categoryName || !files.icon) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log the category name to verify it's being received
    console.log("Category Name from form:", categoryName);

    // Upload file to Cloudinary
    const fileArray = Array.isArray(files.icon) ? files.icon : [files.icon];
    const uploadPromises = fileArray.map((file) =>
      cloudinary.v2.uploader.upload(file.filepath, {
        folder: "uploads",
      })
    );
    const results = await Promise.all(uploadPromises);
    const imageUrl = results[0].secure_url; // Assuming one image per book

    // Find the category by name
    const category = await prisma.category.findUnique({
      where: { name: categoryName },
    });

    if (!category) {
      return NextResponse.json({ error: "Invalid category name." }, { status: 400 });
    }

    // Create the book entry with image URL
    const createdBook = await prisma.book.create({
      data: {
        imageUrl,
        name: bookName,
        author: authorName,
        Price: price,
        description,
        rating,
        categoryId: category.id,
      },
    });

    return NextResponse.json({ message: "Book created successfully.", book: createdBook }, { status: 201 });
  } catch (error) {
    console.error("Error creating book:", error.message);
    return NextResponse.json({ error: "An error occurred while creating the book." }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
