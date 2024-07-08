const AmountSpent = require("../Models/AmountSpent");
const user = require("../Models/Users") ;

exports.AmountSpent = async(req,res)=>{

    try{
        const {
            Amount ,
            wayOfPayment,
            Date,
            Description,
            Location,
            Category
        } = req.body;

        
        const userId = req.user.id;
        console.log(userId);

        if(!Amount || !wayOfPayment || !Description ||!Location || !Category ){
            return res.status(400).json(
                {
                    success:false,
                    message:"Please fill all the data Carefully "
                }
            )
        }

        const newAmountSpent = await AmountSpent.create({
            Amount,
            wayOfPayment,
            Date,
            Description,
            Location,
            Category
        });

        console.log(newAmountSpent);

        // we have to Update this in UserData also ;
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
					AmountSpent: newAmountSpent._id 
				},
			},
			{ new: true }
		);

        console.log("User updated successfully");

		return res.status(200).json({
			success: true,
			message: "AmontSpent Created Successfully",
		});

    }catch(error){
        res.status(500).json({
			success: false,
			message: "Internal server error",
			error: error.message,
		});
    }
};

exports.getAllAmountSpent = async (req , res) =>{
    try{
        const userId = req.user.id;
  
    const userDetails =  await user.findOne(
        {
            _id:userId,
        })
        .populate("AmountSpent")
        .exec()

    if(!userDetails){
        return res.status(500).json({
            success:fasle,
            message:"User is not founded in getAllAmountspent",
        });
    }
     console.log(userDetails) ;
    return res.status(200).json({
        success:true,
        data: userDetails.AmountSpent,
        message:"AmountSpent are populated"
    });
    }catch(error){
      return res.status(200).json({
        success:false,
        message:"error occured while getting AmountSpent" + error.message ,
      });
    }
};

