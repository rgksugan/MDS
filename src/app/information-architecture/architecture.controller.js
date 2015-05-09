'use strict';

angular.module('fdsfrontEnd')
  .controller('ArchitectureCtrl', function ($scope, $http, $routeParams) {
    $http.get('http://localhost:3000/project/' + $routeParams.id).then(function (response) {
      $scope.project = response.data;
    });
  });
