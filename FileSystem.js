const fileSystem= require('fs');

fileSystem.writeFileSync('sampleText.txt','hello everyone....!!');

fileSystem.appendFileSync('sample2.txt','hello everyone again by appending..!!!');

const data=fileSystem.readFileSync('sample2.txt');

console.log(data.toString());

 fileSystem.writeFileSync('sampleText.txt','hello everyone..!!');

fileSystem.unlinkSync('sampleText.txt'); //upper line new text deleted..

fileSystem.renameSync('sample.txt','new.txt');

const exist= fileSystem.existsSync('sampleText.txt');//file exist or not..

console.log(exist);


