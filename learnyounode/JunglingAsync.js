var http = require('http');
var colors = require('colors');
var bl = require('bl');
var buffer = new bl();
getData(process.argv[2], process.argv[3], process.argv[4], printData);

function getData(url1, url2, url3, callback) {
    var url1String;
    var url2String;
    var url3String;
    var stringsCollectedCounter = 0;
    
    http.get(url1, function(response){
        response.setEncoding('ascii');
        response.pipe(bl(function (err, data) {
            if (err){
                console.error;
            }
            else{
               url1String = data.toString();
               stringsCollectedCounter++;
               callback(url1String, url2String, url3String, stringsCollectedCounter);
            }
        }
        ));
    });
        
    http.get(url2, function(response){
        response.setEncoding('ascii');
        response.pipe(bl(function (err, data) {
            if (err){
                console.error;
            }
            else{
                url2String = data.toString();
                stringsCollectedCounter++;
                callback(url1String, url2String, url3String, stringsCollectedCounter);
            }
        }
        ));
    });
    
    http.get(url3, function(response){
        response.setEncoding('ascii');
        response.pipe(bl(function (err, data) {
            if (err){
                console.error;
            }
            else{
                url3String = data.toString();
                stringsCollectedCounter++;
                callback(url1String, url2String, url3String, stringsCollectedCounter);
            }
        }
        ));
    });
}

function printData(string1, string2, string3, counter){
    if (counter === 3) {
        console.log(string1);
        console.log(string2);
        console.log(string3);
    }
}
