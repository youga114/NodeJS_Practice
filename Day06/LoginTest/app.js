var fs = require('fs');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

// app 객체 생성.
var app = express();

// 미들 웨어 설정.
app.use(bodyParser.urlencoded({
    extended : false
}));

app.use(cookieParser());

// 라우팅 설정.
app.get('/', function(req, res){

    // 로그인 여부 확인.
    if(req.cookies.auth) {
        res.send('로그인 성공');
    } else {
        // 로그인 페이지로 이동.
        res.redirect('/login');
    }
});

app.get('/login', function(req, res){
    
    // 로그인 페이지 HTML 파일 읽어서 요청 응답.
    fs.readFile('./login.html', function(error, html) {
        if(error) {
            res.send(error);
        } else {
            res.send(html.toString());
        }
    })
});

app.post('/login', function(req, res){
    var login = req.body.login;
    var password = req.body.password;

    if(login === 'aaaa' && password === '1234') {
        // 로그인 성공.
        res.cookie('auth', true);
        res.redirect('/');
    } else {
        // 로그인 실패.
        res.redirect('/login');
    }
});

// 서버 객체 생성 및 요청 대기.
http.createServer(app).listen(3000);
console.log('서버 실행 중');