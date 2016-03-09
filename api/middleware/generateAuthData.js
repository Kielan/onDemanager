var jwt = modules("jwt")
  , _ = require("underscore")

/**
 * generate a new JWT token and send with user data
 */
module.exports = function generateAuthData(req, res, next) {
    console.log('before fake population', req.user)
    req.data = req.user || { };
	// create an access token through the jwt standard
	// this allows the token authentication to be shared between the services
	// without needing to do extra db calls or couple to the auth service
    req.data.user = req.user ? req.user : null;

    req.data.user = {
      _id: req.data.user._id,
      profile: _.pick(req.data.user.profile, "name", "avatar", "profileType")
    };

    console.log('req.user', req.data.user)
    
    var accessToken = jwt.generateToken(req.data.user, { stg: req.data.strategy });
    req.data.accessToken = accessToken;

    console.log('accessToken', accessToken)
    return next();
};
