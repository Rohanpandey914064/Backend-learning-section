
// ejs setup karne ke liye 

// 1 - ejs install
//         npm i ejs

// 2 - configure ejs

//         app.set("view engine", "ejs");

// 3 - make one views folder 

// 4 - make ejs file inside views folder

// 5 - in place of send use render => when you write file name in side the rende make sure file from views folder and not add .ejs 

const express = require('express');
const data = express();
const port = 3333;

data.set("view engine", "ejs");

data.get('/',function(req,res){
    res.render("index",{age:12});
});

data.get('/rohan',function(req,res){
    res.render("rohan",{age:20});
});

data.listen(3333,function(){
    console.log(`add port number ${port}`);
});