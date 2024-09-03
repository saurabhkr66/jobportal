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
export const getAllJobsController=async(req,res,next)=>{
   const jobs=await jobsModels.find({createdBy:req.user.userId})
   res.status(200).json({
    totaljobs:jobs.length,
    jobs

   })
}
export const updateJobController=async(req,res,next)=>{
    const {id}=req.params;
    const {company,position}=req.body;

    if(!company ||!position){
        next('please provide all fields')
    }
    const job=await jobsModels.findOne({_id:id});

    if(!job){
        next(`no jobs found with this id ${id}`);
    }
    if(!req.user.userId === job.createdBy.toString()){
        next('you are not authorizd to update this job')
        return 
    }
    
    const updateJob=await jobsModels.findOneAndUpdate({_id:id},req.body,{
        new:true,
        runValidators:true
    })
    res.status(200).json({updateJob})

};
export const deletejobController=async(req,res,next)=>{
   const {id}=req.params;
   const job=await jobsModels.findOne({_id:id})

   if(!job){
    next(`no job is found this id ${id}`)
   }
   if(!req.user.userId === job.createdBy.toString()){
    next('you are not authrize to delete this ')
    return
   }
   await job.deleteOne();
   res.status(200).json({message:"job deleted successfully"})

}