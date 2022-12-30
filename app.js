//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = [];
const workItems = [];

app.get("/", function(req, res) {
  let day = date.getDate();

  res.render("list", {
    listTitle: day,
    items: items
  });
})

app.post("/", function(req, res) {

  if (req.body.list === "Work") {
    workItems.push(req.body.newItem);
    res.redirect("/work");
  } else {
    items.push(req.body.newItem);
    res.redirect("/");
  }
})

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    items: workItems
  });
})

app.get("/about", function(req, res) {
  res.render("about");
})

app.listen(3000, function() {
  console.log("server started on port 3000");
})
