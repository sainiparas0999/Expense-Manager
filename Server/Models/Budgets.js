const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
 
     totalBudget:{
        type:Number ,
         
     },

     Income:{
        type:Number  ,
      
     }
});

module.exports = mongoose.model("Budget" , BudgetSchema);