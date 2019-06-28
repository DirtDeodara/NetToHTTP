
const request = require('supertest');
const app = require('../lib/app');

describe('', () => {
  it('able to parse request in server', () => {
    return request(app)
      .get('/')
      .then(res => {
        
      });
  });
});
