var express = require('express'),
router = express.Router();

router.get('/posts', middleware('bitStream'));

module.exports = router;
