'use strict';

var should = require('should');
var app = require('../../app');
var Post = require('./post.model');

var post = new Post({
  title: 'New post',
  content: 'This is a very interesting post',
  createdAt: new Date()
});

describe('Post Model', function() {
  before(function(done) {
    // Clear post before testing
    Post.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    Post.remove().exec().then(function() {
      done();
    });
  });

  it('should begin with no posts', function(done) {
    Post.find({}, function(err, posts) {
      posts.should.have.length(0);
      done();
    });
  });

  it('should set a default value if the title isn\'t specified', function(done) {
    var post = new Post({
      content: 'This is a very interesting post',
      createdAt: new Date()
    });
    
    post.save(function(err) {
      post.should.have.property('title', 'No title');
      done();
    });
  });
  
  it('should fail when saving with emty title', function(done) {
    post.title = '';
    post.save(function(err) {
      should.exist(err);
      done();
    });
  });
  
  it('should trim a title', function(done) {
    post.title = '  Title ';
    post.save(function(err) {
      post.should.have.property('title', 'Title');
      done();
    });
  });
  
  it('should fail when saving with empty content', function(done) {
    post.content = '';
    post.save(function(err) {
      should.exist(err);
      done();
    });
  });
  
  it('should trim a content', function(done) {
    post.content = '  Content ';
    post.save(function(err) {
      post.should.have.property('content', 'Content');
      done();
    });
  });    
});
