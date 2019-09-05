var server = require('./server');
var handler = require('./requestHandler');
var router = require('./router');

var rule = {
    'GET' : handler.get,
    'POST' : handler.post
};

server.start(rule, router.route);