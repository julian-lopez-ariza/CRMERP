print("####################### START SCRIPT.js ##########################");

db = db.getSiblingDB('usuarios');

// db.informacion.find().forEach(function(item, inder){
	// printjson(item);
// });

db.informacion.insert([
	{
	  "_id": "objectid(\"604fa4735a6151ffd89b133d\")",
	  "Nombre": "frank",
	  "Apellido": "pioa",
	  "Equipo": "River"
	},
	{
	  "_id": "objectid(\"604fa4645a6151ffd89b133c\")",
	  "Nombre": "johan",
	  "Apellido": "pipihua",
	  "Equipo": "River"
	},
	{
	  "_id": "objectid(\"604fa4575a6151ffd89b133b\")",
	  "Nombre": "ever",
	  "Apellido": "chuquipapa",
	  "Equipo": "River"
	},
	{
	  "_id": "objectid(\"604fa4425a6151ffd89b133a\")",
	  "Nombre": "benjaminç",
	  "Apellido": "lopez ariza",
	  "Equipo": "Boca"
	},
	{
	  "_id": "objectid(\"604fa43c5a6151ffd89b1339\")",
	  "Nombre": "julian",
	  "Apellido": "lopez ariza",
	  "Equipo": "Boca"
	},
	{
	  "_id": "objectid(\"604fa3f65a6151ffd89b1338\")",
	  "Nombre": "eliseo",
	  "Apellido": "lopez ariza",
	  "Equipo": "Boca"
	}
])

print("####################### END SCRIPT.js ##########################");