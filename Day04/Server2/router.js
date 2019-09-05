function route(rule, method, req, res) {
    if (typeof(rule[method]) === 'function') {
        rule[method](req, res);
    } else {
        res.writeHead(404, {'Content-Type' : 'text/html; charset=utf8'});
        res.write('페이지 없음');
        res.end();
    }
}

module.exports = {
    route : route
};