const BillReminder = require("../Models/BillReminders");
const user = require("../Models/Users");
const schedule = require('node-schedule')
const mailSender = require("../Utils/mailSender")
const  emailTemplate = require("../templates.js/OtpMail")
exports.BillReminder = async (req, res) =>{
    try{
        const{BillAmount , BillName , ReminderDate , cleared} = req.body;

        if(!BillAmount || !BillName  ){
            return res.status(500).json({
                success:false,
                message:"please fill all the data Carefully",
            });
        }
         const userId = req.user.id ;
         const newBillReminder = await BillReminder.create({
            BillAmount , BillName , ReminderDate , cleared
         }) ;

         console.log(newBillReminder);

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
					BillReminder: newBillReminder._id 
				},
			},
			{ new: true }
		);

        console.log("User updated successfully");

      const date = new Date(ReminderDate);// parsing of Date .
      
      schedule.scheduleJob(date, function () {
        (async () => {
        	try {
            const mailResponse = await mailSender(
              email,
              "Verification Email",
              emailTemplate(date)
            );
            console.log("Email sent successfully: ", mailResponse.response);
          } catch (error) {
            console.log("Error occurred while sending email: ", error);
            throw error;
          }
        })();
      });
            console.log("Email Scheduled Successfully");
         return res.status(200).json({
            success:true ,
            message:"BillReminder created Successfully",
         });

    }catch(error){
       res.status(500).json({
        success:false,
        message:error.message
       });
    }
}

exports.getAllBillReminders = async (req , res) =>{
    try{
       const userId = req.user.id ;
       const userDetails = await user.findOne(
        {
          _id:userId,
        })
        .populate("BillReminder")
        .exec()
   
        // console.log(userDetails);
  
        if(!userDetails){
          return res.status(400).json({
            success:false,
            message:"User is not found in Fetching BillReminder",
          });
        }
  
        return res.status(200).json({
          success:true,
          data:userDetails.BillReminder,
        });
    }catch(error){
      re.status(500).json({
        success:false,
        message:"Error Occured while fetching the BillReminder" + error.message ,
      });
    }
   }





