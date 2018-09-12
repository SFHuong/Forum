// Load the environment setup
require("dotenv").config()

// node modules
const express      = require("express");
const bodyParser   = require("body-parser");
const mongoose     = require("mongoose");
const session      = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore   = require('connect-mongo')(session);


// Connecting to MongoDB
mongoose.connect(process.env.DBURL)

// express app
const app = express();



/**
 * Setup global middleware
**/ 

// Parse incoming request bodies in a middleware 
// before your handlers, available under the req.body property
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// run the express app
app.listen(
	process.env.PORT || 3000, 
	() => console.log(`Server is running on port : ${process.env.PORT || 3000}`)
)