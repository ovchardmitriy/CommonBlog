'use strict';

angular.module('commonBlogApp')
  .controller('MainCtrl', function ($scope, Auth) {    
    $scope.isLoggedInResolved = false;
    $scope.isLoggedIn = false;    
  
    /**
     * Set flags of the user's authentication
     *
     * @param  {Boolean}  isLoggedIn
     */
    function setIsLoggedIn(isLoggedIn) {
      $scope.isLoggedInResolved = true;
      $scope.isLoggedIn = isLoggedIn;    
    }
  
    Auth.isLoggedInAsync(setIsLoggedIn);
  });
