
const request = require('supertest');
const { app } = require('../lib/app');
describe('', () => {
  it('able to parse request and send response for GET /', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('hi'));
      });
  });

  it('able to parse request and send response for POST /', () => {
    return request(app)
      .post('/')
      .then(res => {
        expect(res.status).toEqual(400);
        expect(res.text).toEqual(expect.stringContaining('sorry'));
      });
  });

  it('able to parse request and send response for GET /red', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('red'));
      });
  });

  it('able to parse request and send response for GET /green', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('green'));
      });
  });

  it('able to parse request and send response for GET /blue', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('blue'));
      });
  });

  it('able to parse request and send response for GET /dog', () => {
    return request(app)
      .get('/dog')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body).toEqual({
          name: 'Harvey',
          age: 9,
          weight: 55
        });
      });
  });
});