'use strict';

/**
 * @ngdoc overview
 * @name utmbApp
 * @description
 * # utmbApp
 *
 * Main module of the application.
 */
var mainApp = angular.module('utmbApp', ['ngAnimate', 'ui.router']);

mainApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'main'
    })
    .state('region', {
      url: '/regions',
      templateUrl: 'views/regions.html',
      controller: 'trailCtrl'
    })
    .state('region.trails', {
      url: '/trails',
      templateUrl: 'views/regions.trails.html',
      controller: 'trailCtrl'
    });
});
