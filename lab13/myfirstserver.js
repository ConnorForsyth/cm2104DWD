var http = require('http');

http.createServer(funtion (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World');
}).listen(8080);
