
'use strict';

const fs = require('fs');
console.log('__dirname');
console.log(__dirname);

let rawdata = fs.readFileSync('student.json');
let student = JSON.parse(rawdata);
console.log(student);
