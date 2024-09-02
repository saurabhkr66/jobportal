import jobsModels from "../models/jobsModels.js";

export const createJobController=async(req,res,next)=>{
const {company,position}=req.body;

if(!company || !position){
    next('please provide all fields')
}

req.body.createdBy=req.user.userId
const job=await jobsModels.create(req.body);
res.status(201).json({job});
};