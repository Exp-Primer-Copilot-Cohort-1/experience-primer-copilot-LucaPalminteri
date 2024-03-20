// Create web server

var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;
  console.log('Request for ' + pathname + ' received.');

  if (pathname === '/') {
    pathname = 'index.html';
  }

  fs.readFile(path.join(__dirname, pathname), function(err, data) {
    if (err) {
      console.log(err);
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('404 Not found');
      res.end();
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data.toString());
      res.end();
    }
  });
}).listen(8080);

console.log('Server running at http://