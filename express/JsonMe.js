var express = require('express');
var fs = require('fs');
var app = express();
var port = process.argv[2];
var fileName = process.argv[3];

app.get('/books', function (req, res) {
    var obj;
    fs.readFile(fileName, function(e, data) {
        obj = JSON.parse(data);
        res.json(obj);
    });
});
app.listen(port);


