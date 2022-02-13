const http = require('http')
const url = require('url')
const fs =  require('fs')
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('hidsasa');
    }else{
        fs.readFile("jsondata.json", "utf8",(err,data)=>{
            var JSONDATA = JSON.parse(data);
            console.log(data)
        })
        res.writeHead(301);
    }
})
server.listen(3200,"127.0.0.1",()=>{
    console.log('port 3200');
})