// 모듈 가져오기 및 변수에 저장하기.
// #include/@import/using/
var http = require("http");
// var fs = require("fs");             // File System.
var handler = require("./requestHandler");

// 리스너 함수.
// -> 클라이언트(브라우저)에서 요청했을 때 실행될 함수.
function onResponse(req, res){
    console.log(req.url);

    // 요청온 주소 별로 분기.
    var pathname = req.url;

    if(pathname === "/") {
        
        handler.start(req, res);

    } else if (pathname === "/favicon.ico") {
        
        handler.favicon(req, res);

    }
}

// 새로 함수 만들기.
function serverStart(port, handler) {
    
}

// 서버 객체 만들기.
var server = http.createServer(onResponse);

var hostname = "127.0.0.1";
var port = 3000;

// 서버 대기.
server.listen(port);

console.log('서버 실행 중 http://127.0.0.1:' + port);