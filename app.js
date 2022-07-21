//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
//const { urlencoded } = require("body-parser");
const day = require(__dirname + "/date.js");
var string = [];
var size = 0;
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.render("list", { foo: day.getDay(), fo: string, size: size });
});

app.post("/", function (req, res) {
  string.push(req.body.Todolistentry);
  size++;
  console.log(string);
  res.redirect("/");
})

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
