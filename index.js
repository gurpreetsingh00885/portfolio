var express = require('express');
var app = express();
var site = require('./script.js');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));

app.use('/site', site);

app.listen(8080);