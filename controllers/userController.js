import userModel from "../models/userModel.js"

export const updateUserController=async(req,res,next)=>{
const {name,email,lastName,location}=req.body


if(!name||!email||!lastName||!location){
    next('please provide all field')
}

const user=await userModel.findOne({_id:req.user.userId})
user.name=name
user.email=email
user.lastName=lastName
user.location=location

await user.save();
const token=user.createJWT();
res.status(200).json({
    user,token,
});

}