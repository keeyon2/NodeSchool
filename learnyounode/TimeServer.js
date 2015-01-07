var net = require('net');
var port = process.argv[2];
var date = new Date();

var server = net.createServer(function(socket){
    //socket handling logic
    socket.end(getDateString());
});

function add0(i){
    return (i < 10 ? '0' : '') + i;
}

function getDateString(){
    var dateString = date.getFullYear() + '-' + add0(date.getMonth() + 1) +
                     '-' + add0(date.getDate()) + ' ' +  add0(date.getHours()) +
                     ':' + add0(date.getMinutes()) + '\n';
    return dateString;
}

server.listen(port);
