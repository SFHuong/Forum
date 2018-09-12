// node modules
const bodyParser   = require("body-parser");
const session      = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore   = require('connect-mongo')(session);

/**
 * add middleware to express app
 * @param app ---- express app
**/

module.exports = (app) => {

	// Parse incoming request bodies in a middleware 
	// before your handlers, available under the req.body property
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
}