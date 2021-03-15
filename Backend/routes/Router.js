module.exports = function(app){

    const usuario = require('../models/usuario');

    function search(req, res, filter){
        usuario.find(filter,function(err, people) {
            var nameonly = people.map((ori) => ori.Nombre);
            res.send(nameonly.join('</br>'));
        });
    }

    usuarios = function(req, res){
        search(req, res, {});
    };

    boca = function(req, res){
        search(req, res, {"Equipo": "Boca"});
    };

    river = function(req, res) {
        search(req, res, {"Equipo": "River"});
    };
    
    home = function(req, res) {
        res.sendFile('C:\\Repos\\Nodejs\\Frontend\\App.html');
    };

    daleboca = function(req, res) {
        res.sendFile('C:\\Repos\\Nodejs\\Frontend\\Boca.html');
    };

    daleriver = function(req, res) {
        res.sendFile('C:\\Repos\\Nodejs\\Frontend\\River.html');
    };

    app.get('/', home);
    app.get('/daleboca', daleboca);
    app.get('/daleriver', daleriver);
    app.get('/usuarios', usuarios);
    app.get('/usuarios-boca', boca);
    app.get('/usuarios-river', river);
}