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

router.post('/:id', function(req, res, next){
  console.log('Update API');
  console.log(req.body);
  /*Perros.update({id_perro:req.body.id_perro},{$push: {consultas:{fecha: Date.now(),diagnostico:"Esta es una prueba", receta:"Test"}}},function(err){
      if(err){
        console.log("Error");
      }
      else{
        console.log("Actualizado");
        res.render('index');  
      }
      
  });*/
});




module.exports = router;


