'use strict';

/**
 * @ngdoc overview
 * @name nadmin1App
 * @description
 * # nadmin1App
 *
 * Main module of the application.
 */
angular
  .module('nadmin1App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular.css.injector'
  ])
  .config(function ($routeProvider,cssInjectorProvider) {
    cssInjectorProvider.setSinglePageMode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
