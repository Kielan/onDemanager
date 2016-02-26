var _ = require('underscore');

function corsOrigin(env) {
    switch(env) {
    default: return ['http://localhost:3000', 'http://127.0.0.1:3000'];
    };
}

Module.exports = function(env) {
    return {
	origin: function(origin, callback) {
	    var allowedOrigins = corsOrigin(env);
	    callback(null, _.contains(allowedOrigins, origin));
	},
	methods: ['POST', 'GET', 'PUT', 'DELETE'],
	credentials: true
    };
};
