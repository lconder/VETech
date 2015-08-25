var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Duenos = mongoose.model('duenos');

router.get('/', function(req, res, next) 
{
  Duenos.find(function(err, duenos)
  {
    console.log(duenos);
    res.render('duenos',{duenos:duenos});
  });
});

router.get('/:id', function(req, res, next) 
{
	if(req.params.id)
	{
		Duenos.find({id_dueno : req.params.id}, function(err, duenos)
      	{
          console.log(duenos);
          res.json(duenos);
      	});
	}
});

module.exports = router;