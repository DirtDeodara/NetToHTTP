
const { createServer } = require('net');

const app = createServer(sock => {
 
  sock.on('data', data => {
    console.log('from client', data.toString());
    sock.write(data);
  });
});


module.exports = { app };

