const Balance = require("../Models/Balance");
const user = require("../Models/Users");
const mailSender = require("../Utils/mailSender")
const emailTemplate = require("../templates.js/PaswordUpdate")
exports.Balance = async (req , res) => {

     try{
         const {Name , AmountGiven ,TimeSpan, 
           Intrest , email , phoneNo 
        } = req.body;

        const userId = req.user.id;

         if(!Name || !AmountGiven ||!TimeSpan ||!Intrest ||!email || !phoneNo ){
           return res.status(400).json({
            success:false,
            message:"please fill all the info clearly",
           });
         }

         const newBalance = await Balance.create({
            Name , AmountGiven ,TimeSpan, 
            Intrest , email , phoneNo 
         }) ;

         console.log(newBalance);

         const userDetails = await user.findById(userId);

         if(!userDetails){
             return res.status(400).json({
                 success:false,
                 message:"User Not Found While Updating the AmountSpent"
             });
         }
 
         await user.findByIdAndUpdate(
       {
         _id:userDetails._id,
       },
       {
         $push: {
           Balance: newBalance._id 
         },
       },
       { new: true }
     );

         return res.status(200).json({
            success:true,
            message:"Balance created successfullly",
         });
     }catch(error){
          res.status(500).json({
            success:false,
            message:" fail in creating Balance" + error.message,
          });
     }
}

 exports.getAllBalance = async (req , res) =>{
  try{
     const userId = req.user.id ;
     const userDetails = await user.findOne(
      {
        _id:userId,
      })
      .populate("Balance")
      .exec()

      if(!userDetails){
        return res.status(400).json({
          success:false,
          message:"User is not found in Fetching Balance",
        });
      }

      return res.status(200).json({
        success:true,
        data:userDetails.Balance,
      });
  }catch(error){
    re.status(500).json({
      success:false,
      message:"Error Occured while fetching the Balances" + error.message ,
    });
  }
 }


 exports.sendBalanceEmail = async(req , res) =>{
   try{
    const{email} = req.body ;
     if(!email){
      return res.status(400).json({
        success:false,
        message:"Please Give the Email for sending mail",
      });
     }

     await mailSender(
      email,
      "Reminder of Balance",
      `You have to Give Back the Balance to me`
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