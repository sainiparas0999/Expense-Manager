const express = require('express');
const app = express();
const cors = require("cors");
require("dotenv").config();
const database = require("./config/database");
const AmountSpent = require("./Routes/AmoutSpent");
const userRoutes = require("./Routes/Users");
const cookieParser = require("cookie-parser");
// const AmountSpent = require('./Models/AmountSpent');

const PORT = process.env.PORT|| 4000 ;

app.use(express.json());
app.use(cookieParser());


app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/auth" , AmountSpent);

app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

 app.listen( PORT , ()=>{
    console.log("server Started at", PORT);
 }) ;

 app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

 database.connect();