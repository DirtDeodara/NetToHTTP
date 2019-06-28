
const { createServer } = require('net');
const { makeReasponse } = require('../lib/makeResponse');
const { parseHttpPacket } = require('../parseHttpPacket');

const app = createServer(sock => {
  sock.on('data', data => {
    const parsedData = parseHttpPacket(data);
    console.log(parsedData);
    sock.write(data);
  });
});


module.exports = { app };

