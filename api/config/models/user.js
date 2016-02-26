var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

// ## Define UserSchema
var UserSchema = new Schema({
    name: String,
    email: String,
    username: String,
    provider: String,
    hashedPassword: String,
    salt: String,
    followers: [{type: Schema.ObjectId, ref: 'User'}],
    following: [{type: Schema.ObjectId, ref: 'User'}],
    bits: Number
});

UserSchema
    .virtual('password')
    .set(function(password) {
	this._password = password;
	this.salt = this.makeSalt();
	this.hashedPassword = this.encryptPassword(password);
    })
    .get(function() {
	return this._password;
    });

UserSchema.methods = {
    // Methods on the Schema
    authenticate: function(plainText) {
	return this.encryptPassword(plainText) === this.hashedPassword;
    },

    makeSalt: function() {
	return String(Math.round((new Date().valueOf() * Math.random())));
    },

    encryptPassword: function(password) {
	if (!password) {
	    return '';
	}
	return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
    }
}

mongoose.model('User', UserSchema);
