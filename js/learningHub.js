var learningHub = angular.module('learningHub', []);

learningHub.controller('CourseController',['$scope', '$http', function($scope, $http) {
  $http.get('js/LearnHub.json').then(function(data)  {
    $scope.courses = data.data;
  }, function(data) {
    alert("Failed to load json data");
  });
}]);

learningHub.directive('starRating', function () {
  return {
    restrict: 'A',
    template: '<ul class="rating">' +
    '<li ng-repeat="star in stars" ng-class="star">' +
    '\u2605' +
    '</li>' +
    '</ul>',
    scope: {
      ratingValue: '=',
      max: '='
    },
    link: function (scope, elem, attrs) {
      scope.stars = [];
      console.log(scope.ratingValue);
      for (var i = 0; i < scope.max; i++) {
        scope.stars.push({
          filled: i < scope.ratingValue
        });
      }
    }
  }
});
