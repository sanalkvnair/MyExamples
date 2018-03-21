var fs = require('fs');
var data = fs.readFileSync('input.txt');
console.log('Data I: '+data.toString());
console.log('Program First part ended!!!');

fs.readFile('input.txt',function(err, value){
    if(err) return console.error(err);
    console.log('Data II: '+value.toString());
});

console.log('Program ended here!!!!');