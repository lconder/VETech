var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Perros = mongoose.model('perros');


router.get('/', function(req, res, next) 
{
  console.log("perdidos");
  Perros.find({perdido:true}, function(err, perros)
  {
    console.log(perros);
    res.json(perros);
  });
});




module.exports = router;