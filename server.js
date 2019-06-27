
const { createServer } = require('net');

const server = createServer(sock => {
 
  sock.on('data', data => {
    console.log('from client', data.toString());
    sock.write(data);
  });
});

server.listen(9999);

