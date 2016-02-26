var jwt = require('jwt-simple')
	, keygen = require("keygenerator")
	, _ = require("underscore");

module.exports = {
	generateToken: function(user, options) {
		var tokenData = _.extend({
			iss: app.get("issuerKey"),
			aud: app.get("appUrl"),
			sub: 'auth',
			jti: keygen._(), // generate a random, unique id for the token
			iat: +new Date(),
			exp: +new Date() + 1000*3600*24*90, // 90 day expiration time for tokens
			context: user
		}, options || {});

		return jwt.encode(tokenData, app.get("issuerSecret"));
	},
	isValid: function(token) {
		var decoded = jwt.decode(token, app.get("issuerSecret"));

		return decoded.iss === app.get("issuerKey");
	}
};