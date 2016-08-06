//INITIALIZE ENVIORNMENT VARIABLES
require("dotenv").config();

//CONSTANTS
const PORT = process.env.PORT || 8000;

//REQUIRES
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// APP DECLARATION
const app = express();

//GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded: true}));
app.use(express.static("public"));

//ROUTES
app.use("/images", require("./routes/images"));

//SERVER LISTEN
app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});
