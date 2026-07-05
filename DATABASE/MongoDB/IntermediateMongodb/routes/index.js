var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createDB',async function(req, res, next) {
  let data = await userModel.create({
    username:"raunak",
    nickname:"kachodi",
    description:"I love everything",
    categories:['phone','cricket','football','nodejs'],
  })
  res.send(data);
});

//How can I perform a case-insensitive search in Mongoose?
// router.get('/find',async function(req, res, next) {
//   var regex = new RegExp("^Rohan$","i");//^ means isse start hota ho and $ mean ispar khatam hota ho
//   let user = await userModel.findOne({username: regex});
//   res.send(user);
// });

//how do I find documents where an array field contains all the set of values?
// router.get('/find',async function(req, res, next) {
//   let user = await userModel.find({categories: {$all:
//     ['nodejs']}});
//   res.send(user);
// });

//how can I search for documents with a specific date range in Mongoose?
// router.get('/find',async function(req, res, next) {
//   let user = await userModel.find({categories: {$all:
//     ['nodejs']}});
//   res.send(user);
// });

//how can I search for document with a specifica date range in mongoose?
// router.get('/find',async function(req, res, next) {
//   let date1 = new Date('2026-06-12');
//   let date2 = new Date('2026-06-19');
//   let user = await userModel.find({datecreated:{$gte: date1 , $lte: date2}});
//   res.send(user);
// });

//how can I filter document based on existence of a field in mongoose?
// router.get('/find',async function(req, res, next) {
//   let user = await userModel.find({categories:{$exists:true}});
//   res.send(user);
// });

//how can I filter document based on a specifice field length's in mongoose?
router.get('/find',async function(req, res, next) {
  let user = await userModel.find({
    $expr: {
      $and: [
        {$gte:[{$strLenCP: '$nickname'},1]},
        {$lte:[{$strLenCP: '$nickname'},12]}
      ]
    }
  });
  res.send(user);
});

module.exports = router;
