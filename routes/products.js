var express = require('express');
var router = express.Router();

router.get('/:n1/:n2', function(req, res, next){
  var n1 = parseFloat(req.params.n1), n2 = parseFloat(req.params.n2);
  var com = n1*n2;
  res.end(com.toString());
});

module.exports = router;
