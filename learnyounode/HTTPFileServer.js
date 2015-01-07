var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var fileLocation = process.argv[3];
var finishedString;

var info = fs.createReadStream(fileLocation);
info.on('data', function(data){
    finishedString = data;
});


var server = http.createServer(function callback (request, response){
    response.write(finishedString);
    response.end();
});

server.listen(port);

