'use strict';

angular.module('fdsfrontEnd')
  .controller('VisualDesignCtrl', function ($scope, $http, $routeParams) {
    $http.get('http://192.168.100.98:3000/project/' + $routeParams.id).then(function (response) {
      $scope.project = response.data;
    });
  });
