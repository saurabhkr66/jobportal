

const errorMidleware=(err,req,res,next)=>{
    console.log(err);
    const defaultErrors={
        statusCode:500,
        message:err
        }
    res.status(500).send({
        success:false,
        message:"Something went wrong",
        err,

     })
     // missing field error
     if(err.name==='validation error'){
        defaultErrors.statusCode=400
        defaultErrors.message=Object.values(err.errors)
        .map(item=>item.message)
        .join(',');

     }
     if(err.code && err.code===11000){
        defaultErrors.statusCode=400
        defaultErrors.message=`${Object.keys(err.keyValue)} fiels has a unique value`;
     }
     res.status(defaultErrors.statusCode).json({message:defaultErrors.message});
}

export default errorMidleware;;