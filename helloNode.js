/**
 * Created by lade on 2/24/16.
 */
var http = require('http');
var server = http.createServer(function(request, response) {

	console.log(request.headers);
	console.log(request.method);
	console.log(request.url);

	response.statusCode = 200;
	response.setHeader('Content-Type', 'text/html');

	response.write('<html><body><h1>My first server!</h1><p><img src="http://lorempixel.com/400/400/cats" /></p></body></html>');
	response.end();

}).listen(8080);