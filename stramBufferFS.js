const fs = require('fs');
const ourReadStream=fs.createReadStream(`${__dirname}/new.txt`);


//Reading data by streaming..
ourReadStream.on('data',function(chunk){
 console.log(chunk); //showing chunk of data as buffer..
 console.log(chunk.toString()); //showing full data as stream..
});
 console.log('Hello This comes first..');

 //Writing data by streaming..
const ourWriteStream=fs.createWriteStream(`${__dirname}/writeStream.txt`);
ourReadStream.on('data',function(chunked){
    ourWriteStream.write(chunked);
});
console.log('Open the writeStream.txt file to see the written files..');

//pipe method does the samething in 1 line..
ourReadStream.pipe(ourWriteStream);