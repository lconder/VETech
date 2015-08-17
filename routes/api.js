var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Perros = mongoose.model('perros');


router.get('/', function(req, res, next) {
  console.log("API");
  Perros.find(function(err, perros)
  {
    console.log(perros);
    res.json(perros);
  });
});

router.get('/:id', function(req, res, next) 
{
	if(req.params.id)
	{
		Perros.find({id_perro: req.params.id}, function (err, perros)
    {
      console.log(perros);
			res.json(perros);
		});	
	}
});
/*

router.get('/add/:id', function(req, res, next) {
  console.log(req.params.id);
  Razas.find(function(err, razas)
  {
  	console.log(razas);
	res.render('addDog',{id_dueno : req.params.id, razas : razas});
  });
});*/


module.exports = router;


