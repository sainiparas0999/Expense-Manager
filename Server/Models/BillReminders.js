const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const ReminderSchema = new mongoose.Schema({
    BillAmount:{
        type:Number,
        required:true,
    },

    BillName:{
           type:String,
           required:true 
    },

    ReminderDate:{
        type:Date,
        required:true
    },

    cleared:{
        type:Boolean,
        default:false,  
    },

});

 module.exports = mongoose.model("BillReminder" , ReminderSchema);