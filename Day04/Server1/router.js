function route(rule, pathname, req, res) {
    if (typeof( rule[pathname] ) === 'function') {

        rule[pathname](req, res);
    } else {
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.write('<h1> Page Not Found </h1>');
        res.end();
    }
}

module.exports = {
    route : route
};