'use strict';

angular.module('commonBlogApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.posts = [];

    $http.get('/api/posts').success(function(posts) {
      $scope.posts = posts;
    });
  });
