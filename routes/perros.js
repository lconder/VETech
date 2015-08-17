var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer = require('multer');
var cloudinary = require('cloudinary');
var Perros = mongoose.model('perros');
var Razas = mongoose.model('razas');


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

router.post('/', function(req, res, next) {
  console.log(req.body);

  var dog = new Perros({
  	nombre : req.body.nombre,
	raza: req.body.raza,
	nacimiento: req.body.nacimiento,
	sexo: req.body.sexo,
	alimentacion: req.body.alimentacion,
	id_perro: req.body.idCollar,
	descripcion: req.body.descripcion,
  imagen: "",
	consultas: [],
	id_dueno: req.body.idDueno
  })
  
  cloudinary.uploader.upload(req.files.imagen.path, 
    function(result) 
    {
      dog.imagen = result.url; 
      dog.save(function(err) 
      {
        console.log(dog)
        res.render('index');
      });
  });
  /*.save(function(err, perros) 
  {
    console.log(perros)
    //console.log(req.files);
    res.render('index');
  });*/
});

router.get('/add/:id', function(req, res, next) {
  console.log(req.params.id);
  Razas.find(function(err, razas)
  {
  	console.log(razas);
	res.render('addDog',{id_dueno : req.params.id, razas : razas});
  });
});

module.exports = router;


