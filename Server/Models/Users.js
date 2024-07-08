// Import the Mongoose library
const { type } = require("express/lib/response");
const mongoose = require("mongoose");

// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
	{
		// Define the name field with type String, required, and trimmed
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		// Define the email field with type String, required, and trimmed
		email: {
			type: String,
			required: true,
			trim: true,
		},

		// Define the password field with type String and required
		password: {
			type: String,
			required: true,
		},
		// Define the role field with type String and enum values of "Admin", "Student", or "Visitor"
		accountType: {
			type: String,
			enum: ["Admin", "User"],
		},
		active: {
			type: Boolean,
			default: true,
		},
		approved: {
			type: Boolean,
			default: true,
		},
		additionalDetails: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Profile",
		},
		token: {
			type: String,
		},
		resetPasswordExpires: {
			type: Date,
		},
		image: {
			type: String,
			required: true,
		},
		AmountSpent:[
			{
				type:mongoose.Schema.Types.ObjectId,
				ref:"AmountSpent",
			}
		],
		
		BillReminder:[
			{
				type:mongoose.Schema.Types.ObjectId,
				ref:"BillReminder"
			},
		],

		Balance:[
			{
				type:mongoose.Schema.Types.ObjectId,
				ref:"Balance",
			}
		],

		Budget:{
			type:mongoose.Schema.Types.ObjectId,
			ref:"Budget",
			// required:true
		},
		 FinancialGoals:{
			type:mongoose.Schema.Types.ObjectId,
			ref:"FinancialGoals",
			// required:true
		 },

	},
	// { timestamps: true }
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("user", userSchema);