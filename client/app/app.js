(function() {  
  'use strict';

  angular
    .module('commonBlogApp', [
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngRoute'
    ])
    .config(config)
    .factory('authInterceptor', authInterceptor)
    .run(run);
  
  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
  
  function config($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  }
    
  authInterceptor.$inject = ['$rootScope', '$q', '$cookieStore', '$location'];
  
  function authInterceptor($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },
  
      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  }
  
  run.$inject = ['$rootScope', '$location', 'Auth'];
  
  function run($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function(event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          event.preventDefault();
          $location.path('/login');
        }
      });
    });
  }
  
})();
