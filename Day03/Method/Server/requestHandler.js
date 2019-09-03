var fs = require('fs');
var querystring = require('querystring');

function get(req, res) {
    // HTML 파일 읽어서 응답.
    fs.readFile('./page.html', function(error, html){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end();
    });
}

function post(req, res) {
    // 데이터 읽어오기.
    req.on('data', function(data){

        var obj = querystring.parse(data.toString());
        console.log(data.toString());
        //console.log(obj.data_a + " : " + obj.data_b);
        console.log(obj);

        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        res.end(JSON.stringify(obj));

    });
}

module.exports = {
    get : get,
    post : post
};