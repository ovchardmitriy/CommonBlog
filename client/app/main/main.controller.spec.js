'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('commonBlogApp'));

  var MainCtrl,
      scope,
      $httpBackend,
      posts = [
        {
          "_id": "1",
          "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
          "__v": 0,
          "createdAt": "2015-11-10T22:00:00.000Z",
          "title": "Post #1"
        },
        {
          "_id": "2",
          "content": "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
          "__v": 0,
          "createdAt": "2015-11-09T22:00:00.000Z",
          "title": "Post #2"
        },
        {
          "_id": "3",
          "content": "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
          "__v": 0,
          "createdAt": "2015-11-11T22:00:00.000Z",
          "title": "Post #3"
        }
      ];

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/posts')
      .respond(posts);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of posts to the scope', function () {
    $httpBackend.flush();
    expect(scope.posts.length).toBe(3);
  });
});
