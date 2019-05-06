const fs = require('fs');

/*
//read file asincrono
console.log('before read')
fs.readFile('./testo.txt', function (error,data) {
    console.log(data)
  });
  console.log('after read')
*/

//read file sincrono
var file=fs.readFileSync('./testo.txt');
console.log('finish read', file)
console.log('after read')