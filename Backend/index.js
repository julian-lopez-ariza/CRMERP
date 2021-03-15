const express = require('express');
const mongoose = require('mongoose');
const http = require('http');

mongoose.connect('mongodb://localhost/usuarios');

const app = express();

require('./routes/router')(app);

http.createServer(app).listen(8080);