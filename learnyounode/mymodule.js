var fs = require('fs');
var path = require('path');

// module.exports = readAsync(process.argv[2], process.argv[3]);


module.exports = function (file, ext, callback)
{   
    ext = '.' + ext;
    fs.readdir(file, function(err, filesList){
        if (err) {
           return callback(err);
        }
        else
        {
            var fileArray = [];
            filesList.forEach(function (pathString){
                if (path.extname(pathString) === ext)
                {
                  fileArray.push(pathString); 
                }
            });
           callback(null, fileArray); 
        }
    })
}
