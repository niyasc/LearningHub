var learningHub = angular.module('learningHub', []);

learningHub.controller('CourseController',['$scope', '$http', function($scope, $http) {
  $http.get('js/LearnHub.json').then(function(data)  {
    $scope.courses = data.data;
  }, function(data) {
    alert("Failed to load json data");
  });

  $scope.filteredTodos = $scope.results
  ,$scope.currentPage = 1
  ,$scope.numPerPage = 10
  ,$scope.maxSize = 5;

  $scope.makeTodos = function() {
    $scope.todos = [];
    for (i=1;i<=1000;i++) {
      $scope.todos.push({ text:"todo "+i, done:false});
    }
  };
  $scope.makeTodos();

  $scope.$watch("currentPage + numPerPage", function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;

    $scope.filteredTodos = $scope.todos.slice(begin, end);
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
