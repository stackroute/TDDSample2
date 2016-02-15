var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  var obj = {name:"Amit",age:26,location:"Bangalore"};
  res.json(obj);
});

router.get('/js', function(req, res, next){
  var obj = {name:"Yogesh",age:26,location:"Bangalore"};
  res.json(obj);
});

module.exports = router;
