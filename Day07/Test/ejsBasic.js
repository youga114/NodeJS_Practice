var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function(req, res) {

    fs.readFile('./ejsPage.ejs', 'utf8', function(error, html) {

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(ejs.render(html, {
            name : '장세윤'
        }));

    });

}).listen(3000);
console.log('서버 실행 중');