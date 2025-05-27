import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest) {
    const a =await  request.json()

    console.log("shubham",a);
    
    return NextResponse.json({message: a})
}



export async function GET(request: NextRequest) {
   
    
    return NextResponse.json({message: "Hello Shubham   "})
}