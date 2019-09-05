// 모듈 추출.
var server = require('./server');
var handler = require('./requestHandler');
var router = require('./router');

// 라우팅 규칙 설정.
var rule = {
    '/' : handler.start,
    '/favicon.ico' : handler.favicon,
    '/upload' : handler.upload,
    '/show' : handler.show
};

// 서버 실행.
server.serverStart(rule, router.route);