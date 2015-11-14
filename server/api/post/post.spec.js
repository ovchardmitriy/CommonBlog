'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var User = require('../user/user.model');
var auth = require('../../auth/auth.service.js');


describe('GET /api/posts', function() {

  it('should respond with status 401 if user isn\'t authenticated', function(done) {
    request(app)
      .get('/api/posts')
      .end(function(err, res) {
        if (err) return done(err);
        res.statusCode.should.be.exactly(401);
        done();
    });
  });
  
  it('should respond with JSON array if user is authenticated', function(done) {  
    var user = new User({
      provider: 'local',
      name: 'Fake User',
      email: 'test@test.com',
      password: 'password'
    });
    var token;
    
    user.save(function() {
      token = auth.signToken(user._id, user.role);
      
      request(app)
        .get('/api/posts')
        .set('Authorization', 'Bearer ' + token)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) return done(err);
          res.body.should.be.instanceof(Array);
          done();
        });
    });    
  });
});
