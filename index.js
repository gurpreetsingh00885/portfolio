var express = require('express');
var app = express();
var site = require('./script.js');

app.use('/site', site);

app.listen(8080);