'use strict';

/**
 * @ngdoc function
 * @name nadmin1App.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the nadmin1App
 */
angular.module('nadmin1App')
  .controller('AppCtrl', AppCtrl);

AppCtrl.$inject=['$scope','$stateParams','Authentification','$state']
	
  function AppCtrl($scope,$stateParams,Authentification,$state) {
    var appctrl = this;

    


    //modelos
    appctrl.menu = null;

    var isLogin = Authentification.isLogin();

    if (isLogin) {
    	console.log("$stateParams.parametros",$stateParams.parametros);
      appctrl.menu = $stateParams.parametros;
    } else {
    	alert("pailas");
    	$state.go("main");
    }
    
  }
