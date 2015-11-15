(function() {  
  'use strict';
  
  /**
   * The route for creating/updating posts
   * 
   * Requires auth
   */
  angular
    .module('commonBlogApp')
    .config(config);
  
  config.$inject = ['$routeProvider'];  
    
  function config($routeProvider) {
    $routeProvider
      .when('/post', {
        templateUrl: 'app/post/post.html',
        controller: 'PostCtrl',
        resolve: {
          post: getEditablePost
        },
        authenticate: true
      });
  }  
    
  /**
   * Retrieve editable object from server or create new one
   */
  function getEditablePost(Post, $q, $location) {
    var deferred = $q.defer();
    
    if (angular.isUndefined($location.search().id)) {
      deferred.resolve(new Post());
    } else {
      Post.get({ 
        id: $location.search().id 
      }, function(post) {
        deferred.resolve(post);
      }, function() {
        $location.search({});
      });      
    }
    
    return deferred.promise;
  }

})();
