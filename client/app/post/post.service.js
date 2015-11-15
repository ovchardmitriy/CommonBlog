'use strict';

angular
  .module('commonBlogApp')
  .factory('Post', function ($resource) {
    return $resource('/api/posts/:id', { id: '@_id' }, {
      update: {
        method: 'PUT'
      }
    });
  });
