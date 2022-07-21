//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
//const { urlencoded } = require("body-parser");
var string= [];
var size=0;
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
var today= new Date();
var currentDay=today.getDay();
if(currentDay==6||currentDay==7)
{
  var day="weekend";
  res.render("list", {foo: day, fo:string, size: size});
}
else{
  var day="weekday";
  res.render("list", {foo: day, fo: string, size: size});
}
});

app.post("/", function(req, res){
   string.push(req.body.Todolistentry);
   size++;
  console.log(string);
   res.redirect("/");
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
