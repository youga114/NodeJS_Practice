var express = require('express');
var http = require('http');

var app = express();

// 라우팅.
app.get('/', function(req, res) {
    res.send('기본 페이지');
});

app.get('/start', function(req, res){
    res.send('start 페이지');
});

app.get('/show',function(req,res){
    res.send('show 페이지');
});

app.get('/page/:id', function(req, res){
    res.send(req.params.id + ' 페이지');
});

http.createServer(app).listen(3000);
console.log('서버 실행 중');