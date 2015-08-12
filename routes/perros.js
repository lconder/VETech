var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Perros = mongoose.model('perros');


router.get('/', function(req, res, next) 
{
  Perros.find(function(err, perros)
  {
    console.log(perros)
    res.render('consulta',{perros : perros});
  });
});

router.get('/:id', function(req, res, next) 
{
	if(req.params.id)
	{
		Perros.find({id_perro: req.params.id}, function (err, perros){
			console.log(perros);
			res.render('bio',{perro : perros})
		})	
	}
});


module.exports = router;


