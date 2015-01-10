var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.argv[2];

app.put('/message/:id', function(req, res) {
    res.send(require('crypto').createHash('sha1')
        .update(new Date().toDateString() + req.params.id)
        .digest('hex'));
});
 app.listen(port);


