import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

// Initialize Razorpay instance
const razorpayInstance = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_SECRET_KEY!,
});

// Define the interface for the request payload
interface OrderData {
  amount: number; // Amount in INR
  receipt: string; // Unique receipt ID
  productName:string
}

export async function POST(request: NextRequest) {
  try {
    // Parse and validate the incoming request JSON
    const { amount, receipt,productName }: OrderData = await request.json();

    // Validate required fields
    if (!amount || !receipt) {
      return NextResponse.json(
        { error: "Amount and receipt are required fields." },
        { status: 400 }
      );
    }

    // Prepare the options for Razorpay order creation
    const options = {
      amount: amount * 100, // Convert INR to paise
      currency: "INR", // Razorpay requires a valid currency code
      receipt,
      notes: {
        products: Array.isArray(productName) ? productName.join(', ') : productName
      }
    };

    // Create the Razorpay order
    const order = await razorpayInstance.orders.create(options);

    // Return the created order details
    return NextResponse.json(order);
  } catch (error: any) {
    // Handle any errors during order creation
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
