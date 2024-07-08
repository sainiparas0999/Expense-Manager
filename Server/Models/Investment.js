const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const InvestmentSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },

    Amount:{
        type:Number,
        required:true,
    },

    Intrest:{
        type:Number,
        required:true,
    },

    Timespan:{
        type:Number,
        required:true,
    },


});
module.exports= mongoose.model("Investment" , InvestmentSchema);