var mongojs = require('mongojs');
global.db = mongojs('mongodb://localhost:27017/admin');
