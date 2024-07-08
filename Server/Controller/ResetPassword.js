 const User  = require("../Models/Users");
 const mailSender = require("../Utils/mailSender");
 const crypto = require("crypto");
 const bcrypt = require("bcrypt");
exports.resetPasswordToken = async (req , res) =>{
    try{
       const email = req.body.email ;
       const user = await User.findOne({email:email});

       if(!user){
        return res.status(400).json({
            success:false,
            message:"USer is not found",
        });
       }else{
        console.log(" user is Founded");
       }
       
    //    const {
    //     randomBytes,
    //   } = await import('node:crypto');

    const token =  await crypto.randomBytes(20).toString("hex");

      const UpdatedDetails = await  User.findOneAndUpdate(
        {email:email},
        {
            token:token,
            resetPasswordExpires:Date.now() + 3600000 ,
        },
        {new:true}
      );

       console.log(" UpdatedDetails" , UpdatedDetails);

       const url = `http://localhost3000/update-password/${token}`;

      await mailSender(
        email,
        "Password Reset",
		`Your Link for email verification is ${url}. Please click this url to reset your password.`
       );
       
       return res.status(200).json({
        success:true,
        message:" mail sended successfully for resetPasswordToken on your Email",
       });

    }catch(error){
        res.status(400).json({
            success:false ,
            message:" Error Occured while reseting password token --> "+ error.message 
        });
    }
}

exports.resetPassword = async (req , res) =>{

    try{
         const {password , confirmPassword , token} = req.body ;

         if(password !== confirmPassword){
            return res.status(500).json({
                success:false ,
                message:"Password And ConfirmPassword are not matching",
            })
         }

         const userDetails = User.findOne({token:token});
         if(!userDetails){
            return res.status(400).json({
                success:false ,
                message:" USer is not found on that token",
            })
         }
         
         if(!(userDetails.resetPasswordExpires > Date.now())){

            return res.status(400).json({
                success:false ,
                message:" Link is Expired , please try again with new link "
            })
         }

         const encryptedPassword = await bcrypt.hash(password , 10);

         await User.findOneAndUpdate(
            {token:token},
            { password: encryptedPassword},
            {new:true}
         );

         res.status(200).json({
            success:true ,
            message:" password Updated SuccesFully",
         })
    }
    catch(error){
      return res.status(400).json({
        success:false,
        message:"Error occured while resenting password" + error.message ,
      })
    }
}