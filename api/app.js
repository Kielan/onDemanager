var express = require('express')
, path = require('path')
, logger = require('morgan')
, bodyParser = require('body-parser')
, cors = require("cors")
, colors = require("colors")
, passport = require("passport");

global.modules = function(name) {
  return require(path.join(__dirname, '/modules', name));
};

global.middleware = function(name) {
    return require(path.join(__dirname, '/middleware', name));
};

global.app = express();

console.log(">> Loading env configuration".bold.white);
require('./config/env');
console.log(">> Loading mongo".bold.white);
require('./config/mongo');
console.log(">> Loading models schemas".bold.white);
require('./config/models/Bit');
require('./config/models/user');

console.log(">> Setting CORS config".bold.white);
var corsConfig = require("./config/cors")(app.get("env"));

console.log('>> Loading middleware'.bold.white);
app.use(cors(corsConfig));

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
console.log(">> Loading auth middleware".bold.white);
passport.use(middleware("auth/login.passport.js"));

console.log('>> Loading router'.bold.white);
app.use('/api', require('./routes'))

module.exports = app;
