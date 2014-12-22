var fs = require('fs');
var string = fs.readFileSync(process.argv[2]).toString();
var stringNewLineLength = string.split('\n').length - 1;
console.log(stringNewLineLength);
