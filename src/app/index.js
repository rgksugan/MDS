'use strict';

angular.module('fdsfrontEnd', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap', 'mvd.comments'])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/project/:id', {
        templateUrl: 'app/project-overview/project-overview.html',
        controller: 'ProjectOverviewCtrl'
      })
      .when('/project/:id/personas', {
        templateUrl: 'app/personas/personas.html',
        controller: 'PersonaCtrl'
      })
      .when('/project/:id/information-architecture', {
        templateUrl: 'app/information-architecture/information-architecture.html',
        controller: 'ArchitectureCtrl'
      })
      .when('/project/:id/wireframes', {
        templateUrl: 'app/wireframes/wireframes.html',
        controller: 'WireframeCtrl'
      })
      .when('/project/:id/visual-designs', {
        templateUrl: 'app/visual-designs/visual-designs.html',
        controller: 'VisualDesignCtrl'
      })
      .when('/project/:id/style-guide', {
        templateUrl: 'app/style-guide/style-guide.html',
        controller: 'StyleGuideCtrl'
      })
      .when('/project/:id/assets', {
        templateUrl: 'app/assets/assets.html',
        controller: 'AssetsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function (commentConfig) {
    commentConfig.setForumName('mdsdemo').setProvider('disqus');
  });
