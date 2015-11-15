(function() {
  'use strict';
  
  angular
    .module('commonBlogApp')
    .controller('MainCtrl', MainCtrl);
  
  MainCtrl.$inject = ['$scope', 'Auth', 'Post'];  
  
  function MainCtrl($scope, Auth, Post) {    
    $scope.isLoggedInResolved = false;
    $scope.isLoggedIn = false;  
    $scope.posts = [];
    $scope.deletePost = deletePost;
    
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
     * Delete post
     * 
     * @param  {Post}  post
     */
    function deletePost(post) {
      post.$delete(function() {
        populatePosts();
      });
    };
    
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
  }
  
})();
