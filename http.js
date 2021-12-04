const HTTP = require('http');

const server = HTTP.createServer(function(req,res){
if(req.url=='/'){
res.write('Hello good guys..');
res.write('All of u r welcome in this server..');
res.end();
} else if(req.url=='/about'){
    res.write('This is about us..');
    res.end();
}else if(req.url=='/contact'){
    res.write('Oh,,not now buddies..');
    res.end();
}
else if(req.url=='/1'){
    res.write('U hit number..');
    res.end();
}else if(req.url=='/mamun'){
    res.write('Hi,,it is me..');
    res.end();
}
else if(req.url=='/nayeem'){
    res.write('He is simply awesome');
    res.end();
}
else{
    res.write('Nothing found..');
    res.end();
}

});
server.listen(3000);
console.log('Server is created at Port number 3000..');  //To stop server : ctrl+alt+m......