const Profile = require("../Models/Additional")
const User = require("../Models/Users")
exports.Profile = async (req, res) => {
	try {
		const { gender,dateOfBirth = "", about = "", contactNumber, } = req.body;
		const id = req.user.id;

		// Find the profile by id
		const userDetails = await User.findById(id);
		const profile = await Profile.findById(userDetails.additionalDetails);

		// Update the profile fields
		profile.dateOfBirth = dateOfBirth;
		profile.about = about;
		profile.contactNumber = contactNumber;
		profile.gender = gender ;

		// Save the updated profile
		await profile.save();

		return res.json({
			success: true,
			message: "Profile updated successfully",
			profile,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			error: error.message,
		});
	}
};

exports.getProfileDetails = async (req , res) =>{
	try{
        const userId = req.user.id;

		const userDetails = await User.findOne(
			{
				_id:userId,
			})
			.populate("additionalDetails")
			.exec()
         
			if(!userDetails){
				return res.status(500).json({
					success:false,
					message:" user is not founded while fetching ProfileDetails"
				});
			}

			return res.status(200).json({
				success:true ,
				data:userDetails.additionalDetails,
			});
	}catch(error){
		return res.status(500).json({
			success:false,
			message:"Error Occured while fetching ProfileDetails " + error.message
		})
	}
}