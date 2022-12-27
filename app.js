//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  var today = new Date();
  var currDay = today.getDay();
  var day = "";

  if (currDay === 0) {
    day = "Sunday";
  } else if (currDay === 1) {
    day = "Monday";
  } else if (currDay === 2) {
    day = "Tuesday";
  } else if (currDay === 3) {
    day = "Wednesday";
  } else if (currDay === 4) {
    day = "Thursday";
  } else if (currDay === 5) {
    day = "Friday";
  } else {
    day = "Saturday";
  }

  res.render("list", {
    day: day
  });
});

app.listen(3000, function() {
  console.log("server started on port 3000");
})
