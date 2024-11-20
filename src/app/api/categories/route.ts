import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { categoryId } = await request.json(); // Parse the categoryId from the request body

    const result = await prisma.book.findMany({
      where: categoryId ? { categoryId: parseInt(categoryId) } : undefined,
      include: { category: true }, // Include related category data
    });

    return NextResponse.json(result); // Return the filtered books
  } catch (error) {
    console.error("Error fetching books by category:", error);
    return NextResponse.json({ message: "Error fetching books" }, { status: 500 });
  }
}
