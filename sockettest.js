/**
 * Created by HAYAT on 12-Sep-16.
 */
//var socket = require('socket.io');
var express = require('express');
var  app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000);
console.log('listening on 3000.....');

app.get('/',function (req,res) {
    console.log('request url: ' + req.url);
    res.sendFile(__dirname + '/hello.html');
});

io.sockets.on('connection',function (socket) {
    socket.on('send message',function (data) {
        console.log(data);
        io.sockets.emit('new message',data);
    });
});
