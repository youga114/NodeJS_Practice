// 파일 업로드 서버.
var http = require('http');

// 함수 표현식.
var serverStart = function(rule, route) {

    http.createServer(function(req, res) {

        var path = req.url;
        route(rule, path, req, res);

    }).listen(3000);

    console.log('서버 실행 중');
};

// 함수 내보내기.
module.exports = {
    serverStart : serverStart
}