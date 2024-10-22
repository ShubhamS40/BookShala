import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { dbConnect } from "@/config/db/db"; // Ensure the correct path
import userModel from "@/config/model/user.model"; // Ensure the correct path

export async function POST(request: NextRequest) {
    const { name, email, password, dob }: { name: string; email: string; password: string; dob: string } = await request.json();

    await dbConnect(); // Ensure the database connection is established

    try {
        // Generate salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user in the database
        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
            dob
        });

        // Return a success response
        return NextResponse.json({ user: { name: newUser.name, email: newUser.email, dob: newUser.dob } }, { status: 201 });
    } catch (error:any) {
        console.error("Error creating user:", error);
        return NextResponse.json({ message: "Error creating user", error: error.message }, { status: 400 });
    }
}
