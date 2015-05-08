'use strict';

angular.module('fdsfrontEnd')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://localhost:3000/project').then(function (response) {
      console.log(response);
      // $scope.projects = 
    });
  });
