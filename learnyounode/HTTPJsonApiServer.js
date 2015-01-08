var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function callback (request, response){
    if (request.method != 'GET')
        return response.end('send me a GET\n');

    var requestUrl = url.parse(request.url, true)
    var date = new Date(requestUrl.query.iso);

    var DateObj = {};    
    if (requestUrl.pathname.indexOf("parsetime") > -1) {
        DateObj = {"hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds()};
    }
    else {
        DateObj = {"unixtime": date.getTime()};
    }
    var DateJSonObj = JSON.stringify(DateObj);

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(DateJSonObj);
    });

server.listen(port);

