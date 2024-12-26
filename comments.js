// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file from the previous exercise. Use the fs module to read the file and the http module to create the server.

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('comments.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
}).listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});