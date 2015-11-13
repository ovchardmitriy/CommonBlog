/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Post = require('../api/post/post.model');
var User = require('../api/user/user.model');

Post.find({}).remove(function() {
  Post.create({
    title : 'AngularJS',
    content : 'AngularJS lets you write client-side web applications as if you had a smarter browser. It lets you use good old HTML (or HAML, Jade and friends!) as your template language and lets you extend HTML’s syntax to express your application’s components clearly and succinctly. It automatically synchronizes data from your UI (view) with your JavaScript objects (model) through 2-way data binding. To help you structure your application better and make it easy to test, AngularJS teaches the browser how to do dependency injection and inversion of control.',
    createdAt : new Date(2015, 10, 11)
  }, {
    title : 'Node.js',
    content : 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js\' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.',
    createdAt : new Date(2015, 10, 10)
  }, {
    title : 'MongoDB',
    content : 'MongoDB is an exciting new breed of database. The leader of the NoSQL movement is emerging as one of the most useful database solutions in the world. Designed with web applications in mind, Mongo\'s high throughput, unique BSON data model, and easily scalable architecture provides web developers with better tools to store their persistent data.',
    createdAt : new Date(2015, 10, 12)
  }, function() {
    console.log('finished populating posts');
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
    console.log('finished populating users');
  });
});