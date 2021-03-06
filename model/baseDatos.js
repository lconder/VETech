db.perros.insert({
	nombre:"Bela",
	raza:"Boxer",
	nacimiento:"2011-02-23",
	sexo:false,
	alimentacion:"croquetas",
	imagen:"http://res.cloudinary.com/lconder/image/upload/v1439954649/12345_s6nhoy.jpg",
	id_perro:"12345",
	descripcion:"Perra de color blanco, con mancha en los ojos, juguetona y alegre, convive bien con otros perros.",
	consultas:[{
				fecha:Date.now(),
				sintomas:"Dolor en el pecho",
				diagnostico:"Dolor causado por una caida",
				receta:"Naproxeno 1 capsula cada 12 horas por 3 dias"
			},
			{
				fecha:Date.now(),
				sintomas:"Vacuna Puppy",
				diagnostico:"3er Vacuna Cachorro",
				receta:"Aplicacion de vacuna en la pierna derecha"
			}],
	id_dueno:"1234",
	perdido: false,
	adoptado: false,
	recompensa: ""
})

db.perros.insert({
	nombre:"Spark",
	raza:"Labrador",
	nacimiento:"2010-03-18",
	sexo:true,
	alimentacion:"croquetas",
	imagen:"http://res.cloudinary.com/lconder/image/upload/v1439954650/12346_p7nz1v.jpg",
	id_perro:"12346",
	descripcion:"Perro color blanco con manchas negras y café, amigable con las personas pero rudo con otros perros",
	consultas:[{
				fecha: new Date("2014-10-18"),
				sintomas:"Mordedura",
				diagnostico:"Sangrado por una mordida de perro vecino",
				receta:"Naproxeno 1 capsula cada 12 horas por 3 dias"
			},
			{
				fecha: new Date("2014-11-23"),
				sintomas:"Vacuna Quintuple",
				diagnostico:"Vacuna Quintuple",
				receta:"Aplicacion de vacuna en la pierna izquierda"
			}],
	id_dueno:"12345",
	perdido: false,
	adoptado: true,
	recompensa: ""
})

db.perros.insert({
	nombre:"Huevito",
	raza:"Bull Terrier",
	nacimiento:"2012-04-23",
	sexo:true,
	alimentacion:"croquetas",
	imagen:"http://res.cloudinary.com/lconder/image/upload/v1439960411/mclfgyyikztvyaswraff.jpg",
	id_perro:"123467",
	descripcion:"Perro color blanco agresivo para distraerlo arrojat croquetas",
	consultas:[],
	id_dueno:"12345",
	perdido: true,
	adoptado: false,
	recompensa: "$1000"
})

db.duenos.insert({
	nombre:"Luis Conde",
	direccion:"141 Poniente #1314 Col Castillotla",
	telefono:"2221026541",
	email:"conderodriguez.luis@outlook.com",
	id_dueno:"1234"
})

db.duenos.insert({
	nombre:"Fabiola Jiménez",
	direccion:"netolli 9-A unidad habitacional malinalli, Cuautlancingo, Puebla",
	telefono:"2221647560",
	email:"fab_jmnz@hotmail.com",
	id_dueno:"12347"
})

db.duenos.insert({
	nombre:"Alejandro Jiménez Ortega",
	direccion:"Circuito Real de la Hacienda #22 B Fraccionamiento Real de Sta. Clara II",
	telefono:"2227639332",
	email:"alex_artek@hotmail.com",
	id_dueno:"66678"
})

db.duenos.insert({
	nombre:"Gerardo Ramírez",
	direccion:"Míchigan 95 fracc vista alegre puebla",
	telefono:"24111261448",
	email:"gerardoint@gmail.com",
	id_dueno:"65578"
})

db.duenos.insert({
	nombre:"Fernando Conde",
	direccion:"141 Poniente #1316 Col. San Bernabé",
	telefono:"2221735855",
	email:"fernando-conderdz@hotmail.com",
	id_dueno:"12345"
})

db.duenos.insert({
	nombre:"Ileana Conde",
	direccion:"11 Sur #12516 Col. Centro",
	telefono:"2225364975",
	email:"iconde_rdz@yahoo.com.mx",
	id_dueno:"12346"
})

db.razas.insert([
	{nombre:"Afgano"},
	{nombre:"Airedale Terrier"},
	{nombre:"Akita"},
	{nombre:"American Staffordshire Terrier"},
	{nombre:"Antiguo Pastor Inglés"},
	{nombre:"Basenji"},
	{nombre:"Basset Hound"},
	{nombre:"Beagle"},
	{nombre:"Bedlington Terrier"},
	{nombre:"Bichón Frisé"},
	{nombre:"Bloodhound"},
	{nombre:"Border Collie"},
	{nombre:"Borzoi"},
	{nombre:"Boxer"},
	{nombre:"Bull Terrier"},
	{nombre:"Bulldog Inglés"},
	{nombre:"Cavalier King Charles Spaniel"},
	{nombre:"Chihuaheño"},
	{nombre:"Chow Chow"},
	{nombre:"Clumber Spaniel"},
	{nombre:"Cocker Spaniel (Americano)"},
	{nombre:"Cocker Spaniel (Inglés)"},
	{nombre:"Collie Barbudo"},
	{nombre:"Collie Pelo Largo"},
	{nombre:"Crestado Chino"},
	{nombre:"Dachshund/Teckel"},
	{nombre:"Dálmata"},
	{nombre:"Doberman"},
	{nombre:"Fox Terrier"},
	{nombre:"Galgo Italiano"},
	{nombre:"Golden Retriever"},
	{nombre:"Gordon Setter"},
	{nombre:"Gran Danés"},
	{nombre:"Husky Siberiano"},
	{nombre:"Jack Russel Terrier"},
	{nombre:"Keeshond"},
	{nombre:"Pastor Alemán"},
	{nombre:"Pastor Australiano"},
	{nombre:"Pastor Belga"},
	{nombre:"Pastor de Brie"},
	{nombre:"Pastor de Shetland"},
	{nombre:"Pekinés"},
	{nombre:"Pinscher Miniatura"},
	{nombre:"Pointer Alemán"},
	{nombre:"Pomerania"},
	{nombre:"Poodle Estándar"},
	{nombre:"Poodle Miniatura"},
	{nombre:"Poodle Toy"},
	{nombre:"Pug"},
	{nombre:"Rhodesian Ridgeback"},
	{nombre:"Rottweiler"},
	{nombre:"Samoyedo"},
	{nombre:"Schnauzer"},
	{nombre:"Setter Inglés"},
	{nombre:"Setter Irlandés"},
	{nombre:"Shar Pei"},
	{nombre:"Shin Tzu"},
	{nombre:"Silky Terrier"},
	{nombre:"Springer Spaniel Inglés"},
	{nombre:"Terranova"},
	{nombre:"Terrier Escocés"},
	{nombre:"Welsh Corgi Pembroke"},
	{nombre:"West Highland White Terrier"},
	{nombre:"Yorkshire Terrier"},
])



