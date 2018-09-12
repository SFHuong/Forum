// Load the environment setup
require("dotenv").config()

// node modules
const express      = require("express");
const mongoose     = require("mongoose");



// Connecting to MongoDB
mongoose.connect(process.env.DBURL)

// express app
const app = express();



// run the express app
app.listen(
	process.env.PORT || 3000, 
	() => console.log(`Server is running on port : ${process.env.PORT || 3000}`)
)