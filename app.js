//CONSTANTS
const PORT = 8000;

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

//SERVER LISTEN
app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
})