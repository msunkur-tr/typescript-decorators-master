
'use strict';

const fs = require('fs');
const testFolder = './';
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

let rawdata = fs.readFileSync('student.json');
let student = JSON.parse(rawdata);
console.log(student);
