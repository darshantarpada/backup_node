const fs = require('fs');
// const output = fs.readFileSync('read.txt','utf-8');
// console.log(output);
fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log(data);
})
console.log('dasghdhv');
