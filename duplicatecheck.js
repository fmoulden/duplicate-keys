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
    keyFileTest: function(pathToFile) {
        dupCheck(pathToFile);
    },
    keyListTest: function (fileList) {
        var files = Array.from(fileList);
        files.forEach(function(filename, index, array) {
            dupCheck(filename);
        })
    },
    keyDirectoryTest: function (directory, extension) {

    }
};
