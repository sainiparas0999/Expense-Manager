const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const FinancialGoalSchema = new mongoose.Schema({
  
    Investment:[
        {
            type:mongoose.Schema.Types.ObjectId,
            // required: true ,
            ref:"Investment"
        },
    ],

    BankBalance:{
        type:Number ,
        // required:true,
    },

    Loan:[
        {
            type:mongoose.Schema.Types.ObjectId,
            //  required:true,
             ref:"Loan"
        }
    ],

    Goal:{
        type:Number,
        // required:true,
    },
});

module.exports = mongoose.model("FinancialGoals" , FinancialGoalSchema);

