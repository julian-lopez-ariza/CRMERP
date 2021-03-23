print("####################### START SCRIPT.js ##########################");

db = db.getSiblingDB('usuarios');

// db.informacion.find().forEach(function(item, inder){
	// printjson(item);
// });

db.informacion.insert([
	{
	  "_id": "objectid(\"604fa4735a6151ffd89b133d\")",
	  "Nombre": "frank",
	  "Appellido": "pioa",
	  "Equipo": "river"
	},
	{
	  "_id": "objectid(\"604fa4645a6151ffd89b133c\")",
	  "Nombre": "johan",
	  "Appellido": "pipihua",
	  "Equipo": "river"
	},
	{
	  "_id": "objectid(\"604fa4575a6151ffd89b133b\")",
	  "Nombre": "ever",
	  "Appellido": "chuquipapa",
	  "Equipo": "river"
	},
	{
	  "_id": "objectid(\"604fa4425a6151ffd89b133a\")",
	  "Nombre": "benjaminç",
	  "Appellido": "lopez ariza",
	  "Equipo": "boca"
	},
	{
	  "_id": "objectid(\"604fa43c5a6151ffd89b1339\")",
	  "Nombre": "julian",
	  "Appellido": "lopez ariza",
	  "Equipo": "boca"
	},
	{
	  "_id": "objectid(\"604fa3f65a6151ffd89b1338\")",
	  "Nombre": "eliseo",
	  "Appellido": "lopez ariza",
	  "Equipo": "boca"
	}
])

print("####################### END SCRIPT.js ##########################");