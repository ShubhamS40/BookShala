import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'; // Assuming passwords are hashed with bcrypt
import userModel from "@/config/model/user.model";

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();

    try {
        // Find the user by email in your database
        const user = await userModel.findOne({ email });
        
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        // Generate a JWT if credentials are valid
        const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        // Respond with the generated token
        return NextResponse.json({ message: "Login successful", token }, { status: 200 });

    } catch (error: any) {
        console.error('Error during login:', error);
        return NextResponse.json({ message: "Catch part executed", error: error.message }, { status: 500 });
    }
}
