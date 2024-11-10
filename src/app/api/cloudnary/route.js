import { NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { IncomingForm } from "formidable";
import { Readable } from "stream";

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
    const { files } = await parseForm(req);
    if (!files.icon) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const fileArray = Array.isArray(files.icon) ? files.icon : [files.icon];
    const uploadPromises = fileArray.map((file) =>
      cloudinary.v2.uploader.upload(file.filepath, {
        folder: "uploads",
      })
    );

    const results = await Promise.all(uploadPromises);

    return NextResponse.json({
      message: "Files uploaded successfully",
      files: results.map((result) => result.secure_url),
    });
  } catch (error) {
    console.error("Error uploading files:", error);
    return NextResponse.json({ error: "File upload failed", details: error.message }, { status: 500 });
  }
}
