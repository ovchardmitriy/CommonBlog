(function() {
  'use strict';

  angular
    .module('commonBlogApp')
    .controller('NavbarCtrl', NavbarCtrl);
  
  NavbarCtrl.$inject = ['$scope', '$location', 'Auth'];
  
  function NavbarCtrl($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];    
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.logout = logout;
    $scope.isActive = isActive;
    
    function logout() {
      Auth.logout();
      $location.path('/login');
    };
    
    function isActive(route) {
      return route === $location.path();
    };
  };
  
})();
