const userModel=require("../models/User.model")


const validator=async(req,res,next)=>{

    


    const userData = await userModel.find({email:req.email})

    if(userData.length){
        console.log(req)
        return res.json({status:"error",message:"user already exists"})
    }
    else
    next()
}

module.exports=validator