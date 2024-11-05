import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop(); 
    console.log(id);
    

    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    try {
        const book = await prisma.book.findUnique({
            where: { id: parseInt(id) },
    });

        if (!book) {
            return NextResponse.json({ message: "Book not found" }, { status: 404 });
        }

        return NextResponse.json(book); // Return the book data
    } catch (error: any) {
        console.error("Error retrieving book data:", error);
        return NextResponse.json(
            { message: "Error retrieving book data" },
            { status: 500 }
        );
    }
}
