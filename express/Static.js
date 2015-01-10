var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var port = process.argv[2];
var indexFile = process.argv[3];

app.use(express.static(indexFile||path.join(__dirname, 'public')));
app.listen(port);


