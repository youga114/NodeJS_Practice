var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
    // 쿼리문 분석.
    var query = url.parse(req.url, true).query;
    console.log(query);

    res.writeHead(200, {'Content-Type' : 'text/html'});
    
    //분석한 쿼리를 JSON 문자열로 변환(직렬화).    
    res.write(JSON.stringify(query));
    res.end();
});

server.listen(3000);
console.log('서버 실행 중');