var BearerStrategy = require('passport-http-bearer').Strategy
, LocalStrategy = require('passport-local').Strategy
, crypto = require('crypto')
, bcrypt = require('bcrypt-nodejs')
, _ = require('underscore');

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
    console.log('pasing to strategy email', done )
    
	User.findOne({
		"emails.address": email
	}, function(err, user) {
		if (err) return done(err);
		if (!user) return done(null, false, "email was not found.");

	    console.log('user for user', user)
	    var encryptedPassword = user.services.password ? user.services.password.bcrypt : null;
	    console.log('encrypted pass', encryptedPassword);
	    
		validatePassword(password, encryptedPassword, function(err, isMatch) {
			if (err) return next(err);
			if (!isMatch) return done(null, false, "email/password is incorrect");

		    console.log('end of the line', _.pick(user.toObject(), "_id", "profile"))
			return done(null, _.pick(user.toObject(), "_id", "profile"));
		});
	    console.log('done', done)
	});
});
