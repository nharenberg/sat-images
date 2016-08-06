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

let Image = require("./models/image");

app.get("/images", (req, res) => {

  Image.getAll()
    .then(images => {
      res.send(images);
    })
    .catch(err => {
      res.status(400).send(err);
    });
  });

app.post("/images", (req, res) => {


  // req.body
  // {
  //   title:
  //   url:
  //   description:
  // }
  Image.create(req.body)
    .then(() => {
      res.send();
    })
    .catch(err => {
      res.status(400).send(err);
    });

});

//SERVER LISTEN
app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});
