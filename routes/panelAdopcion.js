var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Perros = mongoose.model('perros');


router.get('/', function(req, res, next) 
{
  console.log("adoptados");
  Perros.find({adoptado:true}, function(err, perros)
  {
    console.log(perros);
    res.render('panelAdoptables',{perros:perros});
  });
});




module.exports = router;