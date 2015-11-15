'use strict';

angular.module('commonBlogApp')
  .controller('MainCtrl', function ($scope, Auth, Post) {    
    $scope.isLoggedInResolved = false;
    $scope.isLoggedIn = false;  
    $scope.posts = [];
  
    /**
     * Delete post
     */
    $scope.deletePost = function(post) {
      post.$delete(function() {
        populatePosts();
      });
    };
  
    /**
     * Populates posts when 'isLoggedIn' change
     */
    $scope.$watch('isLoggedIn', function() {            
      populatePosts();
    });
  
    /**
     * Async set flags of the user's authentication
     */
    Auth.isLoggedInAsync(setIsLoggedIn);     
  
    /**
     * Set flags of the user's authentication
     *
     * @param  {Boolean}  isLoggedIn
     */
    function setIsLoggedIn(isLoggedIn) {
      $scope.isLoggedInResolved = true;
      $scope.isLoggedIn = isLoggedIn;
    }
  
    /**
     * Populate $scope.posts if user is logged in
     */
    function populatePosts() {
      if ($scope.isLoggedIn === true) {
        $scope.posts = Post.query();
      } else {
        $scope.posts = [];
      }
    }
  });
