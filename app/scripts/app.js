'use strict';

angular.module('wheelchartApp', [
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sunburst', {
        templateUrl: 'views/sunburst.html',
        controller: 'MainCtrl'
      })
      .when('/wheel', {
        templateUrl: 'views/wheelchart.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
