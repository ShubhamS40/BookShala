import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

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

export async function POST(request: NextRequest) {
  try {
    const { imageUrl, bookName, authorName, price, description, rating, categoryName } = await request.json();

    // Check if required fields are provided
    if (!imageUrl || !bookName || !authorName || !price || !description || !rating || !categoryName) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Find the category by name
    const category = await prisma.category.findUnique({
      where: { name: categoryName }
    });
    if (!category) {
      return NextResponse.json({ error: "Invalid category name." }, { status: 400 });
    }

    // Create the book entry
    await prisma.book.create({
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

    return NextResponse.json({ message: "Book created successfully." }, { status: 201 });
  } catch (error) {
    console.error("Error creating book:", error);
    return NextResponse.json({ error: "An error occurred while creating the book." }, { status: 500 });
  }
}
