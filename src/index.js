const http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Helou Dear World');
}).listen(8000);


console.log('Server listening in port http://localhost:8000/');