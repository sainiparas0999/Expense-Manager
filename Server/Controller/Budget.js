const Budget = require("../Models/Budgets");
const user = require("../Models/Users");
exports.Budget = async (req,res) =>{
    
    try{
    const {totalBudget , Income} = req.body;

    if(!totalBudget || !Income){
        return res.status(500).json({
            success:false,
            message:"please fill all the details carefully"
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
     const BudgetDetails = await Budget.findById(userDetails.Budget);
     if(!BudgetDetails){
        return res.status(500).json({
            success:false,
            message:"BudgetDetails is not found",
        });
     }
      BudgetDetails.totalBudget = totalBudget;
      BudgetDetails.Income = Income ;


      await BudgetDetails.save();
      console.log(BudgetDetails);

       return res.status(200).json({
        success:true,
        message:"Budget created successfully ",
       })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Error in creating Budget",
            error:error.message
        });
    }
}   

exports.getBudget = async (req , res) =>{
    try{
       const userId = req.user.id ;
       const userDetails = await user.findOne(
        {
          _id:userId,
        })
        .populate("Budget")
        .exec()
  
        if(!userDetails){
          return res.status(400).json({
            success:false,
            message:"User is not found in Fetching Budget",
          });
        }
  
        return res.status(200).json({
          success:true,
          data:userDetails.Budget,
        });
    }catch(error){
      re.status(500).json({
        success:false,
        message:"Error Occured while fetching the Budget" + error.message ,
      });
    }
   }