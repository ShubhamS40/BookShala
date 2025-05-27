import { log } from 'console';
import mongoose from 'mongoose'

export async function dbConnect() {
    const url='mongodb+srv://shubham0202in:QlEc5fA785UA2OWZ@bookshalacluster.daffyzp.mongodb.net/'
    try {
        await mongoose.connect(url)
        console.log("mongodb connected sucessfully");
        

    } catch (error) {
        console.log("Data base not Connected Sucessfully");
        
    }

}

