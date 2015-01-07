var http = require('http');
var after = require("after");
var colors = require('colors');
var bl = require('bl');
var async = require('async');
var buffer = new bl();
var finishedString = [];
//var _ = require("underscore")

function getIt(callback, url) {
    http.get(url, function(response){
        response.pipe(bl(function (err, data) {
            if (err) callback('error!');
            else callback(null, data.toString());
        }));
    });
}

async.parallel([
    function(callback) { getIt(callback, process.argv[2]) },
    function(callback) { getIt(callback, process.argv[3]) },
    function(callback) { getIt(callback, process.argv[4]) }
], function (err, data) {
    data.forEach(function(entry) {
        console.log(entry);
    })
});
