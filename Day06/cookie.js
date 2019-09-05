var http = require('http');

http.createServer(function(req, res) {

    // 쿠키 읽어오기.
    var cookie = req.headers.cookie;
    console.log(JSON.stringify(cookie));

    var date = new Date();
    date.setDate(date.getDate() + 7);

    // 쿠키 생성
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie' : [
            'name = Ronnie; Expires = ' + date.toUTCString(),
            'job = freelancer'
        ] 
    });

    res.end(JSON.stringify(cookie));

}).listen(3000);

console.log('서버 실행 중');