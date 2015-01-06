var http = require('http');
var bl = require('bl');
var url = process.argv[2];

var buffer = new bl();

http.get(url, function(response){
    response.setEncoding('ascii');
    response.pipe(bl(function (err, data) {
        if (err){
            console.error;
        }
        else{
           console.log(data.length);
           console.log(data.toString());
        }
    }
    ));
});
    

