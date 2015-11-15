(function() {
  'use strict';
  
  angular
    .module('commonBlogApp')
    .factory('Post', Post);
  
  Post.$inject = ['$resource'];
  
  function Post($resource) {
    return $resource('/api/posts/:id', { id: '@_id' }, {
      update: {
        method: 'PUT'
      }
    });
  }
  
})();
