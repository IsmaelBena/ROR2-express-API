// Import Modules
let express = require('express');
let mongoose = require('mongoose');
let apiRoutes = require("./api-routes");
let dotenv = require('dotenv');
let cors = require('cors');

// Initialise the app
let app = express();

// configure env file
dotenv.config()

// Connect to Mongoose using the database URL retrieved from the env file
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true});
var db = mongoose.connection;

// Check if there is a valid connection to the database
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 8080;

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions))

// set default API route
app.use('/api', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("ROR2-items-API running on port " + port);
});