// full step to setup static file 

// 1. create a folder called Public

// 2. create three folder inside it, image, StyleSheet, javascripts

// 3. configure the express static in script.js file

// 4. understand the path

const express = require('express');
const data = express();
const port = 3333;

data.use(express.static('./public'))
data.set("view engine", "ejs");

data.get('/',function(req,res){
    res.render("index",{age:12});
});

data.listen(port,function(){
    console.log(`add port number ${port}`);
});