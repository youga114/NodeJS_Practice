var http = require('http');

function start(route, rule) {
    
    http.createServer(function(req, res) {

        route(rule, req.url, req, res);

    }).listen(3000);

    console.log('server running');
}

module.exports = {
    start : start
};