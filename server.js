var http = require('http');
var app = require('./config/express')();

require('./config/passport')();

http.createServer(app)
	.listen(3000, 'localhost', function() {
    	console.log('Express Https Server');
});
