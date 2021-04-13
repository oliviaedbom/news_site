const http = require('http');

// create a server object:
const server = http.createServer((req, res) => {
  console.log('new request');

  // write a response to the client
  res.write('Hello World!');

  // end creating a response and send it to the client
  res.end();
});

// the server should start on port 4000
server.listen(5000);

console.log('server started on 5000.\npress [CTRL] + [C] to exit');