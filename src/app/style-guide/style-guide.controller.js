'use strict';

angular.module('fdsfrontEnd')
  .controller('StyleGuideCtrl', function ($scope, $http, $routeParams) {
    $http.get('http://localhost:3000/project/' + $routeParams.id).then(function (response) {
      $scope.project = response.data;
    });

    $scope.colors = [{
      code: '#D4145A',
      description: 'Primary brand color. Use for navigaton bar'
    }, {
      code: '#870D3A',
      description: 'Secondary brand color. Use for navigaton Selection'
    }, {
      code: '#44071D',
      description: 'Main heading font color'
    }, {
      code: '#333333',
      description: 'Secondary heading and paragraph font color'
    }, {
      code: '#0071BC',
      description: 'Hyperlink color'
    }];

    $scope.fonts = [{
      name: 'Roboto Thin',
      size: 28,
      description: 'for main headings'
    }, {
      name: 'Roboto Thin',
      size: 22,
      description: 'for secondary headings and navigations'
    }, {
      name: 'Roboto Thin',
      size: 22,
      description: 'for selected navigations'
    }, {
      name: 'Roboto Thin',
      size: 14,
      description: 'paragraphs'
    }];
  });
