var fs = require('fs');

function finishedReading(error, stringData)
{
    var stringNewLineLength = stringData.toString().split('\n').length - 1;
    console.log(stringNewLineLength);
}

fs.readFile(process.argv[2], finishedReading);

// Can Also do callback this way
var file = process.argv[2];

fs.readfile(file, function (err, data) {
    var lines = data.toString().split('\n').length - 1;
    // console.log(lines);
})

