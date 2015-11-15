(function() {
  'use strict';
  
  /**
  * The routes for user registration and authentification
  */
  angular
    .module('commonBlogApp')
    .config(config);
  
  config.$inject = ['$routeProvider'];
  
  function config($routeProvider) {
    $routeProvider
        .when('/login', {
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      });
  }
  
})();
