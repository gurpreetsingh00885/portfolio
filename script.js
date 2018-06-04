var express = require('express');
var router = express.Router()

router.use('/home', function(req, res) {
	res.render('pages/index');
});

router.use('/experience', function(req, res) {
	res.render('pages/experience');
});

router.use('/education', function(req, res) {
	res.render('pages/education');
});

router.use('/skills', function(req, res) {
	res.render('pages/skills');
});

router.use('/interests', function(req, res) {
	res.render('pages/interests');
});

module.exports = router