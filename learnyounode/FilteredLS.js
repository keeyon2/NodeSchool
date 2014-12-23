var fs = require('fs');
var path = require('path');

var file = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(file, function(err, list){
     for (i = 0; i < list.length; i++)
     {
         if (list[i].split(ext).length === 2)
         {
             //console.log(list[i]);
         }
     }
 })

// Can Also do
fs.readdir(file, function(err, list){
    list.forEach(function (pathString){
        if (path.extname(pathString) === ext)
        {
            console.log(pathString);
        }
    })
})

