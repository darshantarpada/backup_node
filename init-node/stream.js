const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
    // fs.readFile('read.txt',(err,data)=>{
    //     if(err)console.log(err);
    //     res.end(data.toString())
    // })

    // const rstream = fs.createReadStream('read.txt');
    // rstream.on('data',(chunkdata)=>{
    //   res.write(chunkdata);
    // });
    // rstream.on('end',()=>{
    //     res.end();
    // });
    // rstream.on('finish',()=>{
    //   res.write('finish');
    //   res.end();
    // });
    const rstream = fs.createReadStream('read.txt');
rstream.pipe(res)
})


server.listen(8000,"127.0.0.1",()=>{
    console.log('port 8000');
})