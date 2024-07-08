const Investment = require("../Models/Investment");
const user = require("../Models/Users");
const FinancialGoals  = require("../Models/FinancialGoals");
exports.Investment = async (req,res) =>{
    try{
        const{Name , Amount , Intrest ,Timespan} = req.body;

        if(!Name || !Amount || !Intrest ||!Timespan){
            res.status(500).json({
                success:false,
                message:"please fill all the data carefully",
            });
        }
        const userId = req.user.id;

        const userDetails = await user.findById(userId);
        if(!userDetails){
            return res.status(400).json({
               success:false,
               message:"User is not found in Investment" 
            });
        } 

        const newInvestment = Investment.create({
            Name , Amount , Intrest ,Timespan
        });
        console.log(userDetails);
         const FinancialGoalDetails = await FinancialGoals.findById(userDetails.FinancialGoals);
         if(!FinancialGoalDetails){
            return res.status(500).json({
                success:false,
                message:"financialGoalDetails is not founded in Investment Controller"
            });
         }
          
         await FinancialGoals.findByIdAndUpdate(
            {
                _id:FinancialGoalDetails._id,
            },

            {
                $push:{
                   Investment:(await newInvestment)._id,
                }
            },
            {new:true}
         );
    
        return res.status(200).json({
            success:true,
            message:"Investment has been created Successfully"
        });
    }catch(error){
       return res.status(500).json({
        success:false,
        message:"Error occurs while creating Investment",
        error:error.message
       });
    }
}


exports.getInvestment = async (req , res) =>{
    try{
        const {FinancialGoalId} = req.body ;
        console.log(" aa gya hunn");
        if(!FinancialGoalId){
            return res.status(500).json({
                success:false,
                message:"Please give the FinancialGoalId first",
            });
        }
        console.log(" aa gya tha") ;
        const FinancialGoalDetails = await FinancialGoals.findById(
            {
                _id:FinancialGoalId,
            })
            .populate("Investment")
            .exec()
            
            console.log("nhi mila") ;
    
  
        return res.status(200).json({
          success:true,
          data:FinancialGoalDetails.Investment,
        });
    }catch(error){
      res.status(500).json({
        success:false,
        message:"Error Occured while fetching the Investment  " + error.message ,
      });
    }
   }