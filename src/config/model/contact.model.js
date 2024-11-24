const { default: mongoose } = require("mongoose");
const { type } = require("os");


const contactSchema=new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

const contactModel=mongoose.models.contact_details || mongoose.model("contact_details",contactSchema)
export default contactModel