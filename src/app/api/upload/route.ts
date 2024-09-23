import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { url } = await req.json();

  try {
    const savedImage = await prisma.image.create({
      data: {
        url, // Store the public URL
      },
    });
    return NextResponse.json(savedImage);
  } catch (error) {
    console.error("Error saving to database:", error);
    return NextResponse.json({ error: 'Failed to save image URL to database' }, { status: 500 });
  }
}
