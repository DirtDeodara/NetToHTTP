

function makeResponse(status, data, contentType) {
  const date = new Date();
  return `HTTP/1.1 ${status}
Date: ${date}
Server: Apache
Accept-Ranges: bytes
Content-Length: ${Buffer.from(data).length}
Content-Type: text/${contentType}

${data}`;

}

module.exports = { makeResponse };
