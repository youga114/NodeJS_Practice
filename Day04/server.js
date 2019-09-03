var http = require('http');

function start(route){
    
    http.createServer(function(req, res){
        
        route(req.url, req, res);

    }).listen(3000);
    
    console.log('server running');
}

module.exports = {
    start : start
}
