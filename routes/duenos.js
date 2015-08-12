var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Duenos = mongoose.model('duenos');

router.get('/', function(req, res, next) 
{
  Duenos.find(function(err, duenos)
  {
    console.log(duenos);
    res.render('duenos',{duenos:duenos});
  });
});

module.exports = router;