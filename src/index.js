const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");

const pathName=path.join(__dirname,'/public');
const viewsPath = path.join(__dirname, '/views')
app.set('views', viewsPath)
app.use(express.static(pathName));


app.get('/', function(req,res){
  res.render('home');
});


app.listen('3000', ()=>{
  console.log("Sever started");
});
