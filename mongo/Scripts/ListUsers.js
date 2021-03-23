print("####################### START SCRIPT.js ##########################");

db = db.getSiblingDB('usuarios');

db.informacion.find().forEach(function(item, inder){
	printjson(item);
});


print("####################### END SCRIPT.js ##########################");