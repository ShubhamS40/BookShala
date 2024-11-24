
import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/config/db/db";
import  contactModel  from "@/config/model/contact.model"



export async function POST(request:NextRequest) {
    await dbConnect()
    try {
        const {name,email,message}=await request.json()
        if(!name || !email || !message){
           return NextResponse.json({message:"All Fields Are Required To Field"},{status:404})
        }

        const result= await contactModel.create({
            name:name,
            email:email,
            message:message
        }) 
         
        console.log(result);
        

     return   NextResponse.json({result:result})

    } catch (error:any) {

        return NextResponse.json({message:"Catch Part Execuited form Contact Post Route"},{status:404})
        
    }
    
}

