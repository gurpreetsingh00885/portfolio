var express = require('express');
var router = express.Router()

router.use('/home', function(req, res) {
	res.send("Homepage");
});

router.use('/something', function(req, res) {
	res.send("somthing");
});

module.exports = router