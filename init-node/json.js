const fs = require('fs');
// fs.readFile('jsondata.json',(data)=>{
//     console.log(data);
// });
var jsondata = {
    name:"darshan",
    std:10,
    course:"BCA"
};
jsonconvert = JSON.stringify(jsondata);
fs.writeFile('jsondata.json',jsonconvert,(err)=>{
    if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    fs.readFile("jsondata.json", "utf8",(err,data)=>{
        console.log(JSON.parse(data));
    });
  }
});