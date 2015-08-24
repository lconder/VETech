var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer = require('multer');
var cloudinary = require('cloudinary');
var Perros = mongoose.model('perros');
var Razas = mongoose.model('razas');
var Duenos = mongoose.model('duenos');



router.get('/', function(req, res, next) 
{
  console.log("List All");
  Perros.find(function(err, perros)
  {
    console.log(perros)
    res.render('consulta',{perros : perros});
  });
});

router.get('/:id', function(req, res, next) 
{
  console.log("List One");
	if(req.params.id)
	{
		Perros.find({id_perro: req.params.id}, function (err, perros)
    {
      Duenos.find({id_dueno: perros.id_dueno}, function(err, duenos)
      {
          console.log(perros.id_dueno);
          console.log(duenos);
          res.render('bio',{perro : perros, duenos:duenos})
      });
		});	
	}
});

router.post('/', function(req, res, next) 
{
  console.log(req.body);
  console.log("Create");
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
  perdido: false,
  adoptado: false,
  recompensa: "",
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
});

router.post('/:id', function(req, res, next){
  console.log('Update');
  console.log(req.body);
  Perros.update({id_perro:req.body.id_perro},{$push: {consultas:{fecha: Date.now(),diagnostico:"Esta es una prueba", receta:"Test"}}},function(err){
      if(err){
        console.log("Error");
      }
      else{
        console.log("Actualizado");
        res.render('index');  
      }
      
  });
});

router.get('/add/:id', function(req, res, next) {
  console.log(req.params.id);
  Razas.find(function(err, razas)
  {
  	console.log(razas);
	 res.render('addDog',{id_dueno : req.params.id, razas : razas});
  });
});

/*Kitten.update({name: 'fluffy'},{$pushAll: {values:[2,3]}},{upsert:true},function(err){
        if(err){
                console.log(err);
        }else{
                console.log("Successfully added");
        }
});*/




module.exports = router;


