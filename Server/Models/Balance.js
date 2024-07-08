// const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const BalanceSchema = new mongoose.Schema({
    Name:{
        type:String,
        trim:true,
        required:true
    },

    AmountGiven:{
        type:Number,
        required:true,
    },

    TimeSpan:{
        type:Number,
        required:true,
    },

    Intrest:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
   
    phoneNo:{
        type:Number,
        required:true,
    },

    DateofLend:{
        type:Date,
        // required:true,
        default:Date.now
    },
});

module.exports= mongoose.model("Balance" , BalanceSchema);