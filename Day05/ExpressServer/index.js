// 모듈 추출.
var server = require('./server');
var handler = require('./requestHandler');

// 객체 생성 함수 선언.
function RuleCreator(path, method, func) {
    this.path = path;
    this.method = method;
    this.function = func;
}

var rule = [
    new RuleCreator('/','GET', handler.start),
    new RuleCreator('/favicon.ico', 'GET', handler.favicon),
    new RuleCreator('/upload', 'POST', handler.upload),
    new RuleCreator('/show', 'GET', handler.show)
];

server.serverStart(rule);