'use strict';

angular.module('fdsfrontEnd', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/project/:id', {
        templateUrl: 'app/project-overview/project-overview.html',
        controller: 'MainCtrl'
      })
      .when('/project/:id/personas', {
        templateUrl: 'app/personas/personas.html',
        controller: 'MainCtrl'
      })
      .when('/project/:id/information-architecture', {
        templateUrl: 'app/information-architecture/information-architecture.html',
        controller: 'MainCtrl'
      })
      .when('/project/:id/wireframes', {
        templateUrl: 'app/wireframes/wireframes.html',
        controller: 'MainCtrl'
      })
      .when('/project/:id/visual-designs', {
        templateUrl: 'app/main/visual-designs.html',
        controller: 'MainCtrl'
      })
      .when('/project/:id/style-guide', {
        templateUrl: 'app/main/style-guide.html',
        controller: 'MainCtrl'
      })
      .when('/project/:id/assets', {
        templateUrl: 'app/main/assets.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
