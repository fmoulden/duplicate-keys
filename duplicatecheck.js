'use strict';
var fs = require('fs');
var dupCheck = function(pathToFile) {
    var duplicates = [];
    var keylist = '';
    fs.readFile(pathToFile, 'utf8', function(error, data) {
        if (error) {
            return console.log(error);
        }
        console.log(data);
    });
};
module.exports = {
    keytest: function(pathToFile) {
        dupCheck(pathToFile);
    }
};
