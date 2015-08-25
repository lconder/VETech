var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Perros = mongoose.model('perros');
var Duenos = mongoose.model('duenos');


router.get('/:id', function(req, res, next) 
{
	if(req.params.id)
	{
		var temporal= Perros.find({id_perro: req.params.id}, function (err)
    	{
  			if(err)
  				console.log("Error");
  			else
      			console.log(temporal);
			//res.json(perros);
		});	
	}
});


module.exports = router;