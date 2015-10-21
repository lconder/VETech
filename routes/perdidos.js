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

router.post('/:id', function(req, res, next){
  console.log('Update perdidos');
  console.log(req.body);
  Perros.update({id_perro:req.params.id},{perdido:req.body.perdido},function(err,perros)
  {
      if(err){
        console.log("Error");
      }
      else{
        console.log("Actualizado");
        res.json({"objetos":[perros]});
      }
      
  });
});



module.exports = router;