'use strict';

const fs = require('fs');
const testFolder = './';
console.log('List files');
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
