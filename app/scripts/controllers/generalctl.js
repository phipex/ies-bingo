//'use strict';

/**
 * @ngdoc function
 * @name nadmin1App.controller:GeneralctlCtrl
 * @description
 * # GeneralctlCtrl
 * Controller of the nadmin1App
 */
angular.module('nadmin1App')
  .controller('GeneralCtrl',GeneralCtrl );

GeneralCtrl.$inject= ['$scope','Labels','Events','$state','Authentification'];

function GeneralCtrl($scope,Labels,Events,$state,Authentification) {
  console.log("GeneralCtrl");
  var general = this;

  //modelos
  general.userName = null;

  general.isLogin = false;

  general.btnLogin = Labels.LABEL_BTN_LOGIN;

  general.clickSingIn = clickSingIn;

  general.clickSingOut = clickSingOut;


  //eventos
  $scope.$on(Events.ON_LOGIN_CHANGE,function(event,data) {
      console.log("Events.ON_LOGIN_CHANGE",event,data);
      general.isLogin = (data.usuario && data.usuario !== "");
      if (general.isLogin) {
        general.userName = data.usuario;
      }
      
    }); 
  
  //funciones
  function clickSingIn() {
     console.log("vamor para login");
     $state.go('login');
  }

  function clickSingOut() {
     console.log("vamor para login");
     $state.go('login');
     Authentification.logout();
     general.isLogin = false;

  }

  /*general.$watch("general.isLogin",function(actual,nuevo){
    if(general.isLogin){
      general.btnLogin = Labels.LABEL_BTN_LOGOUT;
    }else{
      general.btnLogin = Labels.LABEL_BTN_LOGIN;
    }

  });*/




}
