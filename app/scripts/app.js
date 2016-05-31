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
    //'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(['$stateProvider','$urlRouterProvider'
    ,function($stateProvider,$urlRouterProvider){

      $urlRouterProvider.otherwise("/");
      $stateProvider

        .state('main', {//pagina inicial del la aplicacion
          url: "/",
          templateUrl: "views/main.html",
          controller: "MainCtrl as mainctrl"
        })
        .state('login', {//login de la aplicacion
          url: "/login",
          templateUrl: "views/login.html",
          controller: "LoginCtrl as loginctrl"
        })
        .state('app',{//zona donde ingresa el usuario logeado de la aplicacion
          url: '/app',
          controller: 'AppCtrl',
          templateProvider: ['Session','$stateParams','$templateFactory'
            ,function(Session,$stateParams,$templateFactory){
              return Session.current()//TODO cambiar para autorizacion
                .then(function(response){
                  
                  var user = response.data;
                  // return template based on login role.
                  console.log(user);  

                  var parametros = user.parametros;
                  $stateParams.parametros = parametros;
                  //console.log(user,$stateParams);
                  if (user.isAdmin){
                    return $templateFactory.fromUrl('views/admin.tpl.html',$stateParams);
                  }else{
                    return $templateFactory.fromUrl('views/user.tpl.html',$stateParams);
                  }
                }, function(reason) {
                alert('Failed: ' + reason);//TODO rerigir a la pagina inicial
                
              })

            }]
        });

    }]).run(function ($rootScope, Labels) {//para usar los label en todas las vistas
        $rootScope.Labels = Labels;
    });

  /*.config(function ($routeProvider,cssInjectorProvider) {
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
      .when('/venta', {
        templateUrl: 'views/venta.html',
        controller: 'VentaCtrl',
        controllerAs: 'venta'
      })
      .otherwise({
        redirectTo: '/'
      });
  });*/
