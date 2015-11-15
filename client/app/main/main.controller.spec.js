'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('commonBlogApp'));
  
  // load mocked service module
  beforeEach(module('mock'));

  var MainCtrl,
    scope,
    $httpBackend;

  it('should set authentication flag to true and populate $scope.posts', function () {
    var mockedPostsLength;
    
    inject(function (_Auth_, _$httpBackend_, _mockedPosts_, $controller, $rootScope) {      
      _Auth_.setCbArgumnet(true);
      
      $httpBackend = _$httpBackend_;
      $httpBackend
        .expectGET('/api/posts')
        .respond(_mockedPosts_);
      
      mockedPostsLength = _mockedPosts_.length;
      
      scope = $rootScope.$new();
      MainCtrl = $controller('MainCtrl', {
        $scope: scope,
        Auth: _Auth_
      });
    });     
    
    $httpBackend.flush();
           
    expect(scope.isLoggedIn).toBe(true);
    expect(scope.isLoggedInResolved).toBe(true);
    expect(scope.posts.length).toBe(mockedPostsLength);
  });
  
  it('should set authentication flag to false and does not populate $scope.posts', function () {
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
    expect(scope.posts.length).toBe(0);
  });
});
