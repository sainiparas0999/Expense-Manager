const express = require("express")
const router = express.Router() ;
const{auth} = require("../middlewares.js/auth")
const{AmountSpent , getAllAmountSpent} = require("../Controller/AmountSpent");

const {Balance,getAllBalance ,sendBalanceEmail} = require("../Controller/Balance");
const {BillReminder , getAllBillReminders} = require("../Controller/BillReminder");

const{Budget, getBudget} = require("../Controller/Budget");
const{FinancialGoals , getFinancialGoals} = require("../Controller/FinancialGoals");

const {Profile , getProfileDetails} = require("../Controller/Profile");

const{Loan , getLoan} = require("../Controller/LoanController");

const{Investment , getInvestment} = require("../Controller/Investment");


router.post("/AmountSpent" , auth , AmountSpent);
router.post("/Balance" , auth , Balance);
router.post("/BillReminder" , auth , BillReminder);
router.post("/Budget" , auth , Budget);
router.post("/FinancialGoals" , auth , FinancialGoals);
router.post("/Profile" , auth , Profile);
router.post("/LoanController" , auth , Loan);
router.post("/Investment" , auth , Investment);
router.post("/SendBalanceEmail" , auth , sendBalanceEmail);

router.get("/getAllAmountSpent" , auth , getAllAmountSpent);
router.get("/getAllBalance" , auth , getAllBalance);
router.get("/getAllBillReminder" , auth , getAllBillReminders);
router.get("/getBudget" , auth , getBudget);
router.get("/getFinancialGoals" , auth , getFinancialGoals);
router.get("/getInvestment" , auth , getInvestment);
router.get("/getLoan" , auth , getLoan);
router.get("/getProfileDetails" , auth , getProfileDetails);

module.exports = router ;