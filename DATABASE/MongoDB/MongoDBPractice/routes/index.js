var express = require('express');
var router = express.Router();

const userModule = require('./users');

/* GET home page. */

//cookies -----------------------------------------------------------------------
// router.get('/', function(req, res) {
//   res.cookie('fullName',"rohan pandey"); // cookies creation
//   res.render('index');
// });

// router.get('/cookiesRead', function(req, res) {
//   console.log(req.cookies);
//   res.send("cookies read on console");
// });

// router.get('/deleteCookies', function(req, res) {
//   res.clearCookie("fullName");
//   res.send("cookies deleted");
// });

//session -----------------------------------------------------------------------------

// router.get('/', function(req, res) {
//   req.session.block = true;  //session creation
//   res.render('index');
// });

// router.get('/checkSession',function(req,res){
//   if(req.session.block){
//     res.send(`session find website block and the value is ${req.session.block} `);
//   }else{
//     res.send("not block");
//   }
// });

// router.get('/deleteSession',function(req,res){
//   req.session.destroy(function(err){
//     if(err) throw err;
//     res.send("session deleted");
//   })
// });
//----------------------------------------------------------------------------------------


// data creation
// router.get('/create', async function(req, res) {
//   const createdUser = await userModule.create({
//     username:"rohan",
//     age:19,
//     name:"rohan pandey"
//   });
//   res.send(createdUser);
// });

// get all data in collection
// router.get('/allUser', async function(req, res) {
//   let data = await userModule.find();
//   res.send(data);
// });

//get one data in collection
// router.get('/allUser', async function(req, res) {
//   let data = await userModule.findOne({_id: "6a2ddcebf91161dab5dedb9e"});
//   res.send(data);
// });

//delete data
// router.get('/delete', async function(req, res) {
//   let data = await userModule.findOneAndDelete({username:"rohan"});
//   res.send(data);
// });

module.exports = router;
