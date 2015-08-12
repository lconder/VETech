var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Dueno = new Schema({
	nombre:String,
	direccion : String,
	telefono: String,
	email: String,
	id_dueno: String
});

var Perro = new Schema({
	id_dueno: String,
	nombre: String,
	raza: String,
	nacimiento: Date,
	sexo: Boolean,
	alimentacion: String,
	id_perro: String,
	descripcion: String,
	consultas: [{fecha: Date, sintomas: String, diagnostico: String, receta: String}]
});



mongoose.model('duenos',Dueno);
mongoose.model('perros',Perro);
mongoose.connect('mongodb://localhost/vetech');

