var fs = require('fs');

function start(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf8'});
    res.write('NodeJs 테스트 서버 입니다.');
    res.end();
}

function favicon(req, res) {
    fs.readFile('./icon.png', function(error, image) {
        if (error) {

            console.log(error);
            res.writeHead(400, {'Content-Type' : 'text/plain'});
            res.write(error.toString());
            res.end();
        } else {
            
            res.writeHead(200, {'Content-Type' : 'image/png'});
            res.write(image);
            res.end();
        }
    });
}

module.exports = {
    start : start,
    favicon : favicon
}