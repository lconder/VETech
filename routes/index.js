var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Perro = mongoose.model('perros');
//var Perros = mongoose.model('Perros');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  console.log("Aplicación corriendo...")
});

router.get('/evento', function(req, res, next) {
  res.render('index');
});



module.exports = router;
