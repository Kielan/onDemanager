var express = require('express'),
router = express.Router();

router.get('/posts', middleware('bitStream'));
router.get('/post/:urlParam', middleware('post'))

module.exports = router;
