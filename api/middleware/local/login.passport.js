var LoginStrategy = require("passport-http-bearer").Strategy
, LocalStrategy = require('passport-local').Strategy
, crypto = require("crypto")
, _ = require("underscore");

function validatePassword(password, encryptedPassword, callback) {
    var crypto = require('crypto');
    var hash = crypto.createHash('sha256').update(password).digest("hex");

    bcrypt.compare(hash, encryptedPassword, function(err, isMatch) {
	if (err) return callback(err);
	
	if (isMatch) return callback(null, true);
	bcrypt.compare(password, encryptedPassword, callback);
    });	
};

module.exports = new LocalStrategy({ passReqToCallback: true }, function(req, email, password, done) {
    console.log('pasing to strategy')
	User.findOne({
		"emails.address": email
	}, function(err, user) {
	    console.log('user findone', user)
		if (err) return done(err);
		if (!user) return done(null, false, "email was not found.");

		validatePassword(password, encryptedPassword, function(err, isMatch) {
			if (err) return next(err);
			if (!isMatch) return done(null, false, "email/password is incorrect");

			return done(null, _.pick(user.toObject(), "_id", "profile"));
		});
	});
});
