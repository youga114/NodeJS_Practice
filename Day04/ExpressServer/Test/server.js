var express = require('express');
var app = express();

// 응답 함수.
app.use(function(req, res) {
    
    var name = req.query.name;
    res.send('name: ' + name);
}).listen(3000);

console.log('Server running');