const http = require('http');

const port = 7080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end('{"message": "Hello DevChat"}');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = server;
