var fs = require('fs');     // file system module.

// POST 요청으로 넘어온 파일을 읽기 위해 사용.
var formidable = require('formidable');

function start(req, res) {
    fs.readFile('./upload.html', function(error, html) {
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    });
}

function favicon(req, res) {
    fs.readFile('./icon.png', function(error, image) {
        res.setHeader('Content-Type', 'image/png');
        res.end(image);
    });
}

function upload(req, res) {

    // 모듈 초기화.
    var form = new formidable.IncomingForm();

    // 폼(form) 해석(파싱).
    form.parse(req, function(error, fields, files) {
        console.log(files.image.path);

        // 파일 옮겨오기.
        fs.rename(files.image.path, './upload/image.png', function(error) {
            res.setHeader('Content-Type','text/html');
            res.end('<img src=/show />');
        })
    })
}

function show(req, res) {
    fs.readFile('./upload/image.png', function(error, image) {
        res.setHeader('Content-Type', 'image/png');
        res.end(image);
    });
}

module.exports = {
    start : start,
    favicon : favicon,
    upload : upload,
    show : show
};