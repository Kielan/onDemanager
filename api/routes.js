var express = require('express')
, generateAuthData = middleware("generateAuthData")
, passport = require("passport")
, router = express.Router();

router.get('/bits', middleware('bitStream'));

router.get("/token/valid", passport.authenticate("jwt", { session: false }), function(req, res, next) {
    if (!req.user) return res.sendStatus(401)
    return res.sendStatus(200)
});

/*
router.get("/local", passport.authenticate('local', { session: false }), generateAuthData, function(req, res, next) {
    console.log('local')
    return res.status(200).send(req.data);
});
*/

//passport.authenticate('local', { session: false }),

router.post('/login', generateAuthData, function(req, res, next) {
   // console.log('req');
    return res.status(200)
});

module.exports = router;
