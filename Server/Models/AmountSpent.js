const { type } = require('express/lib/response');
const mongoose = require("mongoose");


const SpentSchema = new mongoose.Schema(
    {
        
        Amount:{
            type: Number,
            required: true ,
        } ,
        
        wayOfPayment :{
            type:String ,
            enum:[ "Cash" , "Online"] 
        },
      
        Date:{
            type:Date,
            // required:true,
            default:Date.now
        },

        Description:{
            type: String,
            trim: true
        } ,

        Location:{
            type:String,
            trim: true
        },

        Category:{
            type:String,
        }

    });

    module.exports = mongoose.model("AmountSpent" , SpentSchema);