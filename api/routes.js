var express = require('express')
, generateAuthData = middleware("generateAuthData")
, passport = require("passport")
, router = express.Router();

router.get('/bits', middleware('bitStream'));

router.get("/token/valid", passport.authenticate("jwt", { session: false }), function(req, res, next) {
    if (!req.user) return res.sendStatus(401)
    return res.sendStatus(200)
});


router.post("/local", passport.authenticate('local', { session: false }), generateAuthData, function(req, res, next) {
    return res.status(200).send(req.data);
});

module.exports = router;
