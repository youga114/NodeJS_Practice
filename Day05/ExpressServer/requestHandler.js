var fs = require('fs');     // file system module.

function start(req, res) {
    fs.readFile('./upload.html', function(error, html) {
        res.setHeader('Content-Type', 'text/html');
        res.send(html.toString());
    });
}

function favicon(req, res) {
    fs.readFile('./icon.png', function(error, image) {
        res.setHeader('Content-Type', 'image/png');
        res.send(image);
    });
}

function upload(req, res) {

    // 디렉토리가 있는지 확인하고, 없으면 생성.
    var dir = './upload';
    if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    fs.rename(req.files.image.path, './upload/image.png', function(error) {
       res.send('<img src=/show />'); 
    });
}

function show(req, res) {
    fs.readFile('./upload/image.png', function(error, image) {
        res.setHeader('Content-Type', 'image/png');
        res.send(image);
    });
}

module.exports = {
    start : start,
    favicon : favicon,
    upload : upload,
    show : show
};