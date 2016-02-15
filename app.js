var express = require("express");
var bodyParser = require('body-parser');
var logger = require("morgan")
var app = express();

var routes = require('./routes/index');
var products = require('./routes/products');
var data = require('./routes/data');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
app.use('/product', products);
app.use('/data', data);


app.listen(8080);
