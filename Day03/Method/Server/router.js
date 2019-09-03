var handler = require('./requestHandler');

var rule = {
    'GET' : handler.get,
    'POST' : handler.post
};

function route(method, req, res) {
    if(typeof rule[method] === 'function') {
        rule[method](req, res);
    } else {
        console.log('No function to response');
    }
}

module.exports = {
    route : route
}