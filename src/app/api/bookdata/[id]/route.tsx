import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma'; // Adjust this import based on your Prisma setup

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query; // Get the ID from the query parameters

    if (req.method === 'GET') {
        try {
            const book = await prisma.book.findUnique({
                where: { id: Number(id) }, // Find the book by ID
            });

            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }

            res.status(200).json(book); // Return the book data
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving book data' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
