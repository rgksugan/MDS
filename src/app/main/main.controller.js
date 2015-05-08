'use strict';

angular.module('fdsfrontEnd')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://192.168.100.98:3000/project').then(function (response) {
      $scope.projects = response.data;
    });
  });
