'use strict';

angular.module('fdsfrontEnd')
  .controller('NavbarCtrl', function ($scope) {
    $scope.currentProject = localStorage.getItem('project');
  });
