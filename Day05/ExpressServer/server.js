var http = require('http');
var express = require('express');

var multiparty = require('connect-multiparty');

// 라우터 설정.
function setRouter(app, rule) {
    for (var key in rule) {
        if(rule[key].method === 'GET') {
            // app.get
            app.get(rule[key].path, rule[key].function);

        } else if (rule[key].method === 'POST') {
            // app.post
            app.post(rule[key].path, rule[key].function);

        }
    }
}

// 서버 시작 함수.
function serverStart(rule) {
    // Express 객체 생성.
    var app = express();

    // 미들웨어 사용 설정.
    app.use(multiparty());

    setRouter(app, rule);

    // 서버 객체 생성하면서 요청 대기.
    http.createServer(app).listen(3000);
    console.log('서버 실행 중');
}

module.exports = {
    serverStart : serverStart
}