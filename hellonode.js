/**
 * Created by HAYAT on 9/9/2016.
 */
var http = require('http');

http.createServer(function(request,respose){
    respose.writeHead(200);
    respose.write("hello, thisis from hayat");
    respose.end();
}).listen(8080);
console.log('Listening on port 8080.....');

