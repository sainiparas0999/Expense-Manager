const Loan = require("../Models/Loan");
const user = require("../Models/Users");
const FinancialGoals = require("../Models/FinancialGoals");
exports.Loan = async (req,res) =>{
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
 
         const newLoan =  await Loan.create({
            Name , Amount , Intrest ,Timespan
         });
        //  console.log(userDetails);

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
                    Loan:(await newLoan)._id,
                 }
             },
             {new:true}
          );
        console.log(newLoan);
    
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

exports.getLoan = async (req , res) =>{
    try{
       
        const {FinancialGoalId} = req.body ;

        if(!FinancialGoalId){
            return res.status(500).json({
                success:false,
                message:"Please give the FinancialGoalId first",
            });
        }

        const FinancialGoalDetails = await FinancialGoals.findOne(
            {
                _id:FinancialGoalId,
            })
            .populate("Loan")
            .exec()        
    
  
        return res.status(200).json({
          success:true,
          data:FinancialGoalDetails.Loan,
        });
    }catch(error){
      res.status(500).json({
        success:false,
        message:"Error Occured while fetching the Loan" + error.message ,
      });
    }
   }