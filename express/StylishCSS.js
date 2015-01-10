var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.argv[2];
var HtmlStylusFiles = process.argv[3];

app.use(require('stylus').middleware(__dirname + 'public'));
app.use(express.static(HtmlStylusFiles||path.join(__dirname, 'public')));
app.listen(port);


