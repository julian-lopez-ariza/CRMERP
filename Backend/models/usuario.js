var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    Nombre: String,
    Apellido: String,
    Equipo: String
}, );

module.exports = mongoose.model('informacion', usuarioSchema, 'informacion');