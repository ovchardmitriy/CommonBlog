(function() {
  'use strict';

  angular
    .module('commonBlogApp')
    .controller('PostCtrl', PostCtrl); 
  
  PostCtrl.$inject = ['$scope', '$location', 'Post', 'post'];
  
  function PostCtrl($scope, $location, Post, post) {
    //An action that will be performed
    var action;
    
    $scope.post = post;
    $scope.inProcess = false;
    $scope.isServerError = false;
    $scope.submit = submit;
    
    if ($scope.post.hasOwnProperty('_id')) {
      //the passed post will be updated
      $scope.buttonText = 'Update'; 
      action = updatePost;
    } else {    
      //new post will be created
      $scope.buttonText = 'Create'; 
      action = createPost;
    }
    
    /**
    * Submit valid form to the server
    *
    * @param  {form}  form
    */
    function submit(form) {
      $scope.submitted = true;
      
      if(form.$valid) {
        $scope.inProcess = true;
        action();
      }
    };
    
    /**
    * Try to create new post on the server
    */
    function createPost() {
      $scope.buttonText = 'Saving...';
      $scope.post.$save(function(){
        $location.path('/').search({});
      }, function() {
        $scope.isServerError = true;
      });
    }
  
    /**
    * Try to update an existing post on the server
    */
    function updatePost() {    
      $scope.buttonText = 'Updating...';
      $scope.post.$update(function(){
        $location.path('/').search({});
      }, function() {
        $scope.isServerError = true;
      });
    }
  }
  
})();
