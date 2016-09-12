/**
 * Created by HAYAT on 12-Sep-16.
 */
//var socket = require('socket.io');
var express = require('express');
var  app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var nickname = [];

server.listen(3000);
console.log('listening on 3000.....');

app.get('/',function (req,res) {
    console.log('request url: ' + req.url);
    res.sendFile(__dirname + '/hello.html');
});

io.sockets.on('connection',function (socket) {
    socket.on('new username',function (data,callback) {
        if(nickname.indexOf(data) != -1){
            callback(false);
        }else {
            callback(true);
            socket.nickname = data;
            console.log(data);
            nickname.push(socket.nickname);
            console.log(nickname);
            updateNicknames();
        }
    });

    function updateNicknames() {
        io.sockets.emit('usernames',nickname);
    }

    socket.on('send message',function (data) {
        console.log(data);
        io.sockets.emit('new message',{msg: data, nickname: socket.nickname});
    });

    socket.on('disconnect',function (data) {
        if(!socket.nickname) return;
        nickname.splice(nickname.indexOf(socket.nickname),1);
        updateNicknames();

    });
});
