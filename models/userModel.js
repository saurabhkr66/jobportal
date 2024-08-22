import mongoose from "mongoose";
import validator from "validator";
const userSchema= new mongoose.Schema({
   name:{
    type:String,
    required:[true,'Name is required']
   },
   lastName:{
    type:String,

   },
   email:{
    type:String,
    required:[true,'Email is required'],
    unique:true,
    validate:validator.isEmail
   },password:{
    type:String,
    required:[true,'Password is required'],
    minlength:[6,'length should be 6 charcter']
  },
    
    
    location:{
        type:String,
        default:'hilsa',
    }
   
},{timestamps:true})

export default mongoose.model("User",userSchema);