
	var http = require('http');
	var fs = require('fs');
	var contents = fs.readFileSync('contents.html');

	http.createServer(function(req, res){
		//res.end('DevPleno.com');
		res.end(contents);
	}).listen(3000);