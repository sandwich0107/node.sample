var http = require('http');

http.createServer(function (req,res){

res.writeHead(200,{'Concent-Type':'text/plain'});

res.end('hello world\n');

}).listen(1337 , '127.0.0.1');
