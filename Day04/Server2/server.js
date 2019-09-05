var http = require('http');

function start(rule, route) {

    http.createServer(function(req, res) {
        
        route(rule, req.method, req, res);
        
    }).listen(3000);
    console.log('서버 실행 중');
}

module.exports = {
    start : start
};