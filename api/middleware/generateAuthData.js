var jwt = modules("jwt")
  , _ = require("underscore")

/**
 * generate a new JWT token and send with user data
 */
module.exports = function generateAuthData(req, res, next) {
	req.data = req.data || {};
	// create an access token through the jwt standard
	// this allows the token authentication to be shared between the services
	// without needing to do extra db calls or couple to the auth service
	req.data.user = req.data.user ? req.data.user : req.user;
    req.data.user = {
      _id: req.data.user._id,
      profile: _.pick(req.data.user.profile, "name", "avatar", "profileType")
    };

	var accessToken = jwt.generateToken(req.data.user, { stg: req.data.strategy });
	req.data.accessToken = accessToken;
    return next();
};
