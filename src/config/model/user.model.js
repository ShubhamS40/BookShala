import mongoose from "mongoose";
import { type } from "os";


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    address:String,
    
},{timestamps:true})


 const userModel= mongoose.models.users || mongoose.model('users',userSchema)
 export default userModel

