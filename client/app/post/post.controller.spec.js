'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('commonBlogApp'));
  
  var PostCtrl,
    scope,
    post;

  it('should create new post', function () {    
    inject(function ($controller, $rootScope, Post) {            
      post = new Post();
      post.title = 'new title';
      post.content = 'new content';
      
      scope = $rootScope.$new();
      PostCtrl = $controller('PostCtrl', {
        $scope: scope,
        post: post
      });
    });
           
    expect(scope.buttonText).toBe('Create');
  });
  
  it('should update an existing post', function () {    
    inject(function ($controller, $rootScope, Post) {            
      post = new Post();
      post.title = 'title';
      post.content = 'content';
      post._id = 0;
      
      scope = $rootScope.$new();
      PostCtrl = $controller('PostCtrl', {
        $scope: scope,
        post: post
      });
    });
           
    expect(scope.buttonText).toBe('Update');
  });
});
