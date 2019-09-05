var fs = require('fs');
var querystring = require('querystring');

function get(req, res) {

    var url = req.url;
    if (url === '/') {
        
        fs.readFile('./page.html', function(error, html) {
            if (error) {
                console.log(error.toString());
                res.writeHead(400, {'Content-Type' : 'text/html'});
                res.write(error.toString());
                res.end();
    
            } else {
    
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.write(html);
                res.end();
            }
        });

    } else if (url === '/favicon.ico') {
        fs.readFile('./icon.png', function(error, image) {
            res.writeHead(200, {'Content-Type' : 'image/png'});
            res.write(image);
            res.end();
        });
    }
}

function post(req, res) {

    var postData = "";

    // Read Data.
    req.on('data', function(data) {
        postData += data.toString();
    });

    req.on('end', function() {
        var obj = querystring.parse(postData.toString());

        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf8'});
        res.write(JSON.stringify(obj));
        res.end();
    });
}

module.exports = {
    get : get,
    post : post
};

// module.exports = {
//     get,
//     post
// };