/**
 * Created by HAYAT on 10-Sep-16.
 */
var http = require('http');
var fs = require('fs');
http.createServer(function (req,res) {
    console.log('request url: ' + req.url);
    res.writeHead(200);
    var myReadStream = fs.createReadStream(__dirname + '/hello.html','utf8');
    var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt','utf8');
    // myReadStream.on('data',function (chunk) {
    //     console.log('new chunk received: ');
    //     console.log(chunk);
    // });
    myReadStream.pipe(res);

}).listen(8080,'127.0.0.1');
console.log('Listening on port 8080.....');