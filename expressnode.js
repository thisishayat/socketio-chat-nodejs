/**
 * Created by HAYAT on 11-Sep-16.
 */
var express = require('express');
var app = express();

app.get('/zamantalukder.html',function (req,res) {
    //res.send('hello, this is from express');
    res.sendfile(__dirname+'/hello.html');
});

app.listen(3080);
console.log('listening on 3080....');