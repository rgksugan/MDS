'use strict';

angular.module('fdsfrontEnd')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://localhost:3000/project').then(function (response) {
      $scope.onGoingProjects = _.filter(response.data, function (project) {
        return new Date(project.end_date) > new Date();
      });
      $scope.completedProjects = _.filter(response.data, function (project) {
        return new Date(project.end_date) < new Date();
      });
    });

    $scope.setProject = function (projectId) {
      localStorage.setItem('project', projectId);
    };
  });
