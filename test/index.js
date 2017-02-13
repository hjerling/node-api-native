const server = require('../index');
const request = require('supertest');
const assert = require('assert');

describe('GET /', () => {
  it('returns a 200', (done) => {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('returns a json content type header', (done) => {
    request(server)
      .get('/')
      .expect('Content-Type', 'application/json')
      .end(done);
  });

  it('returns a welocome message', (done) => {
    request(server)
      .get('/')
      .end((err, res) => {
        assert.ifError(err);
        assert.equal(res.body.message, 'Hello DevChat');
        done();
      });
  });
});
