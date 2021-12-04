const OSModule= require('os');

console.log(OSModule.platform());
console.log(OSModule.arch());
console.log(OSModule.homedir());
console.log(OSModule.hostname());
console.log(OSModule.freemem());
console.log(OSModule.networkInterfaces);