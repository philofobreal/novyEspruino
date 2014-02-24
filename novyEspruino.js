///////////////////////////////////////////////////////////
//Create File
var fs = require('fs');
var testName    = "novycode.log";
var testCode = "Some Code here";

fs.appendFileSync(testName, testCode);

///////////////////////////////////////////////////////////
//Reade File
var fs = require('fs');
var testName    = "novycode.log";

console.log(fs.readFileSync(testName));
