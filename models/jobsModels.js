import mongoose from "mongoose";

const jobSchema=new mongoose.Schema({
   comany:{
    type:String,
    required:[true,'company name is required'],
   },
   position:{
    type:String,
    required:[true,'position name is required'],
   },
   status:{
    type:String,
    enum:['pending','reject','interview'],
    default:'pending'
   },
   workType:{
    type:String,
    enum:['full-time','part-time','freelance'],
    default:'full-time'
   },worklocation:{
    type:String,
    required:[true,'work location is required'],
   },
   createdBy:{
    type:mongoose.Types.ObjectId,
    ref:'User'
   }

},{timestamps:true})

export default mongoose.model('Job',jobSchema);