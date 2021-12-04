// const HTTP = require('http');

// const server = HTTP.createServer(function(req,res){
// if(req.url=='/'){
// res.write('<html><head><title><Form></title></head>');
// res.write(`<body><form method="post" action="/process">
// <input name="message"></input></form></body>`);
// res.end();
// } else if(req.url=='/process' && req.method=='POST'){
//     req.on('data',function(chunk){
//     console.log('buffer data:\n'+chunk);//buffer data..
//     res.write('Thanks for the submission..');
//     console.log('Encoded data:\n' +chunk.toString());//streamed data(encoded)..
//     res.end();
//     });
//  } else{
//     res.write('Nothing found..');
//     res.end();
// }
// });
// server.listen(3000);
// console.log('Server is created at Port number 3000..');


//easy way to write to the clients with help of FS..


const HTTP = require('http');
const fs = require('fs');

const pipeServer = HTTP.createServer((req,res)=>{
    const ourReadStream=fs.createReadStream(`${__dirname}/new.txt`);
    ourReadStream.pipe(res);
});
pipeServer.listen(3000);
console.log('Server is created at Port number 3000..');