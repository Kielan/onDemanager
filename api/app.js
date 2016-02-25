var express = require('express')
, path = require('path')
, logger = require('morgan')
, bodyParser = require('body-parser')
, cors = require("cors")
, colors = require("colors");

global.app = express();

global.middleware = function(name) {
  return require(path.join(__dirname, '/middleware', name));
};

console.log(">> Loading env configuration".bold.white);
require('./config/env');
console.log(">> Loading mongo".bold.white);
require('./config/mongo');
console.log(">> Loading mongoose".bold.white);
require('./config/mongoose');
console.log(">> Setting CORS config".bold.white);
var corsConfig = require("./config/cors")(app.get("env"));

console.log('>> Loading middleware'.bold.white);
app.use(cors(corsConfig));

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log('>> Loading router'.bold.white);
app.use('/blogapi', require('./routes'))

module.exports = app;
