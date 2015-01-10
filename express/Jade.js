var express = require('express');
var path = require('path');
var app = express();
var port = process.argv[2];
var indexPath = process.argv[3];

app.set('views', path.join(__dirname, indexPath));
app.set('view engine', 'jade');

app.get('/home', function(req, res) {
    res.render(indexPath, {date: new Date().toDateString()});
    res.end('Hello World!')
});
app.listen(port);
