const { parseHttpPacket } = require('../parseHttpPacket');

describe('http', () => {
  it('returns method and path from packet', () => {
    const str = 'GET / ';
    const { method, path } = parseHttpPacket(str);
    expect(method).toEqual('GET');
    expect(path).toEqual('/');
  });
});

