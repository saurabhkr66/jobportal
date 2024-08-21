import mongoose from "mongoose";
import validator from "validator";
const userSchema= new mongoose.Schema({
   name:{
    type:String,
    required:[true,'Name is required']
   },
   lastName:{
    type:String,required:[true,'Last name is required'],

   },
   email:{
    type:String,
    required:[true,'Email is required'],
    unique:true,
    validate:validator.isEmail
   },password:{
    type:String,
    required:[true,'Password is required'],
    minlength:8,
    validate: {
      validator: (v) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v),
      message: 'Password must contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters',
    },
    location:{
        type:String,
        default:'hilsa',
    }
   }
})

export default mongoose.model("User",userSchema);