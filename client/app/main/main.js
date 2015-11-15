(function() {
  'use strict';
  
  /**
   * The root route of app
   */
  angular
    .module('commonBlogApp')
    .config(config);
  
  config.$inject = ['$routeProvider'];  
  
  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  }
  
})();