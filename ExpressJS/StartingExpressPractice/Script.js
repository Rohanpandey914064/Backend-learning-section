// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });











const express = require('express');
const data = express();
const port = 3333;
data.set('view engine', 'ejs');
var count = 1;

// middelware
data.use(function(req,res,next){
    console.log(`first middelwer work then ather work ${count}`);
    count = count + 1;
    next();
});

data.get('/',function(req,res){
    res.send("hii I'm rohan pandey");
});

data.get('/profile/rohan',function(req,res){
    res.send("my name is rohan");
});

data.get('/profile/:username',function(req,res){
    res.send(`my name is ${req.params.username}`);
});

data.get('/error',function(req,res,next){
    throw Error("error come");
});

data.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
});

data.listen(3333,function(){
    console.log(`add port number ${port}`);
});

