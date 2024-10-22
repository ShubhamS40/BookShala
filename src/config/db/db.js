import { log } from 'console';
import mongoose from 'mongoose'

export async function dbConnect() {
    const url='mongodb://localhost:27017/Bookshala'
    try {
        await mongoose.connect(url)
        console.log("mongodb connected sucessfully");
        

    } catch (error) {
        console.log("Data base not Connected Sucessfully");
        
    }

}

