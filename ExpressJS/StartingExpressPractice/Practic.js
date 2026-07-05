
const express = require('express');
const app = express();
app.use(express.static('./public'));

app.set("view engine","ejs");

app.get('/',function(req , res){
    res.render('profile')
});

app.get('/profile',function(req,res){
    res.send("only profile hai")
})

app.listen(3000,function(){
    console.log("running......");
});