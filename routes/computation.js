var express = require('express');
var router = express.Router();
var sum = 0, more = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  var random  = Math.random();
  var comp = Math.log2(random);
  res.send("log2 applied to "+random+" is "+comp);
});

module.exports = router;