const FinancialGoals =  require("../Models/FinancialGoals");
const user = require("../Models/Users");
exports.FinancialGoals = async(req ,res) =>{
    try{
        const {Investment , BankBalance ,Loan ,Goal} = req.body;
        
        if( !BankBalance ||!Goal){
            return res.status(500).json({
                success:false ,
                message:"please fill all the data carefully",
            });
        }
        
        const userId = req.user.id;
        const userDetails = await user.findById(userId);
        if(!userDetails){
           return res.status(500).json({
               success:false,
               message:"User is not found",
           });
        }
        const FinancialGoalsDetails = await FinancialGoals.findById(userDetails.FinancialGoals);
        if(!FinancialGoalsDetails){
           return res.status(500).json({
               success:false,
               message:"FinancialGoalDetails is not found",
           });
        }
       
          FinancialGoalsDetails.BankBalance = BankBalance ;
          FinancialGoalsDetails.Goal = Goal ;
   
   
         await FinancialGoalsDetails.save();
       

        return res.status(200).json({
            success:true,
            Message:"FinancialGoals created Successfully",
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Error in creating FinancialGoals",
            error:error.message
        });
    }
}

exports.getFinancialGoals = async (req , res) =>{
    try{
       const userId = req.user.id ;
       const userDetails = await user.findOne(
        {
          _id:userId,
        })
        .populate(
            {
                path:"FinancialGoals",
                populate:{
                    path:"Investment",
                },
                populate:{
                    path:"Loan",
                }
            }
        )
        .exec()
  
        if(!userDetails){
          return res.status(400).json({
            success:false,
            message:"User is not found in Fetching FinancialGoals",
          });
        }
  
        return res.status(200).json({
          success:true,
          data:userDetails.FinancialGoals,
        });
    }catch(error){
      re.status(500).json({
        success:false,
        message:"Error Occured while fetching the FinancialGoals" + error.message ,
      });
    }
   }