var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/failed', function(req, res) {
  req.flash("age",19);
  req.flash("name","rohan pandey");
  res.send("flash has created.")
});

router.get('/FailedMessage', function(req, res) {
  console.log(req.flash("age"),req.flash("name"));
  res.send("see the console terminal.");
});

module.exports = router;
