var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Perros = mongoose.model('perros');


router.get('/', function(req, res, next)
{
  console.log("Perros x dueño");
  Perros.find({id_dueno: "1234"}, function(err, perros)
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




module.exports = router;


