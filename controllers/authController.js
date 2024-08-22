import userModel from "../models/userModel.js";

export const registerController=async(req,res,next)=>{
try {
    const {name,email,password}=req.body;

    //validation
    // if(!name){
    //     next('name is required');

    // }
    // if(!email && !password){
    //     next('email or password is required');
    // }
    const existinguser = await userModel.findOne({email});
    if(existinguser){
        next('"email already exists"');
    }

    const user=await userModel.create({name,email,password})
    res.status(201).send({
        success: true,
        message:'User registered successfully',
        user
    })

} catch (error) {
   next(error)
    
}
}