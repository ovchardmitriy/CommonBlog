'use strict';

var mockedPosts = [
  {
    _id: 0,
    content: 'Content #1',
    title: 'Title #1'
  }, {
    _id: 1,
    content: 'Content #2',
    title: 'Title #2'
  }, {
    _id: 2,
    content: 'Content #3',
    title: 'Title #3'
  }
];

// Mocked services
angular
  .module('mock', [])
  .factory('Auth', mockedAuth)
  .value('mockedPosts', mockedPosts);
           
function mockedAuth() {
  var authService = {},
    cbArgumnet = false;
  
  authService.isLoggedInAsync = function(cb) {
    cb(cbArgumnet);
  };
  
  authService.setCbArgumnet = function(value) {
    cbArgumnet = value;
  };
      
   return authService;
}
