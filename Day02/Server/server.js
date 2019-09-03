// 모듈 가져오기.
var http = require("http");

function serverStart(route) {
    function onResponse(req, res) {
        var pathname = req.url;
        route(pathname, req, res);
    }
    
    var server = http.createServer(onResponse);
    server.listen(3000);
    console.log("서버 실행 중");
}

// 내보내기.
module.exports = {
    "serverStart" : serverStart
};