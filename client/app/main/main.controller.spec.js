'use strict';

// Mocked service Auth
angular.module('mock.auth', []).
    factory('Auth', function() {
        var authService = {},
            cbArgumnet = false;

        authService.isLoggedInAsync = function(cb) {
            cb(cbArgumnet);
        };
  
        authService.setCbArgumnet = function(value) {
            cbArgumnet = value;
        };
        
        return authService;
    });

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('commonBlogApp'));
  
  // load mocked service module
  beforeEach(module('mock.auth'));

  var MainCtrl,
      scope;

  it('should set authentication flag to true', function () {
    // Initialize the controller, mock scope and Auth service
    inject(function (_Auth_, $controller, $rootScope) {      
      _Auth_.setCbArgumnet(true);
      
      scope = $rootScope.$new();
      MainCtrl = $controller('MainCtrl', {
        $scope: scope,
        Auth: _Auth_
      });
    });
           
    expect(scope.isLoggedIn).toBe(true);
    expect(scope.isLoggedInResolved).toBe(true);
  });
  
  it('should set authentication flag to false', function () {
    // Initialize the controller, mock scope and Auth service
    inject(function (_Auth_, $controller, $rootScope) {      
      _Auth_.setCbArgumnet(false);
      
      scope = $rootScope.$new();
      MainCtrl = $controller('MainCtrl', {
        $scope: scope,
        Auth: _Auth_
      });
    });
           
    expect(scope.isLoggedIn).toBe(false);
    expect(scope.isLoggedInResolved).toBe(true);
  });
});
