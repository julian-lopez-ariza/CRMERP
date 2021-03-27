(function() {
    var startDate = new ISODate();
    
    var mongo = new Mongo();
    var db = mongo.getDB("admin");
	// db.auth(user, password);

	print('---------------------------------------------------');
	print(' Deploying MongoDB... ');
	print('---------------------------------------------------');
	print('');
	print('');
	
	cd("./Scripts");
	var releases = listFiles();

	releases.forEach(function (file) {
		print('--------------- '+ file.baseName +' -------------------------');
		load(file.baseName);
	});
	
	print('');
	print('');

    var endDate = new ISODate();
    var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

	print('---------------------------------------------------');
	print('All done! (Time elapsed ' + seconds + " seconds).");
	print('---------------------------------------------------');
})();