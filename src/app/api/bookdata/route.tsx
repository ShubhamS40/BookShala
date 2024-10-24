import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

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
