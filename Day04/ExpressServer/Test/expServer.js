var express = require('express');
var http = require('http');

var app = express();

app.use(function(req, res) {
    res.send('테스트 서버');
});

http.createServer(app).listen(3000);
console.log('Server Running');