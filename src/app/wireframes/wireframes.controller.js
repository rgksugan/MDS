'use strict';

angular.module('fdsfrontEnd')
  .controller('WireframeCtrl', function ($scope, $routeParams, $http) {
    // $('#wireframe-container').photoTagger();
    $http.get('http://localhost:3000/project/' + $routeParams.id).then(function (response) {
      $scope.project = response.data;
    });
  });
