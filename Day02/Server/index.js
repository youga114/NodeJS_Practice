// 모듈 가져오기.
var server = require("./server");
var router = require("./router");

// 서버 실행하기.
server.serverStart(3000, router.route);