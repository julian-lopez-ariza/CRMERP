print("####################### START SCRIPT.js ##########################");

db = db.getSiblingDB('usuarios');

// db.informacion.find().forEach(function(item, inder){
	// printjson(item);
// });

db.informacion.insert([
	{
	  "_id": "objectid(\"604fa4735a6151ffd89b133d\")",
	  "nombre": "frank",
	  "apellido": "pioa",
	  "equipo": "river"
	},
	{
	  "_id": "objectid(\"604fa4645a6151ffd89b133c\")",
	  "nombre": "johan",
	  "apellido": "pipihua",
	  "equipo": "river"
	},
	{
	  "_id": "objectid(\"604fa4575a6151ffd89b133b\")",
	  "nombre": "ever",
	  "apellido": "chuquipapa",
	  "equipo": "river"
	},
	{
	  "_id": "objectid(\"604fa4425a6151ffd89b133a\")",
	  "nombre": "benjaminç",
	  "apellido": "lopez ariza",
	  "equipo": "boca"
	},
	{
	  "_id": "objectid(\"604fa43c5a6151ffd89b1339\")",
	  "nombre": "julian",
	  "apellido": "lopez ariza",
	  "equipo": "boca"
	},
	{
	  "_id": "objectid(\"604fa3f65a6151ffd89b1338\")",
	  "nombre": "eliseo",
	  "apellido": "lopez ariza",
	  "equipo": "boca"
	}
])

print("####################### END SCRIPT.js ##########################");