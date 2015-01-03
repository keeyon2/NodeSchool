var mymodule = require('./mymodule.js');
var file = process.argv[2];
var ext = process.argv[3];

mymodule(file, ext, function(err, filesList){
    if (err){
        return console.error("error", err);
    }
    else {
        filesList.forEach(function (file){
            console.log(file);
        });
    }
});
