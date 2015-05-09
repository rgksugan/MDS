'use strict';

angular.module('fdsfrontEnd')
  .controller('NavbarCtrl', function ($scope, $window) {
    $scope.currentProject = localStorage.getItem('project');
  });
