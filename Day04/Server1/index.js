var server = require('./server');
var router = require('./router');
var handler = require('./requestHandler');

var rule = {
    '/' : handler.start,
    '/favicon.ico' : handler.favicon
};

server.start(router.route, rule);