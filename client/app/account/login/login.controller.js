(function() {
'use strict';

angular
  .module('commonBlogApp')
  .controller('LoginCtrl', LoginCtrl);
  
LoginCtrl.$inject = ['$scope', '$location', 'Auth'];

function LoginCtrl($scope, $location, Auth) {
  $scope.user = {};
  $scope.errors = {};
  $scope.login = login;

  function login(form) {
    $scope.submitted = true;
    
    if(form.$valid) {
      Auth
        .login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
    }
  };
}
  
})();
