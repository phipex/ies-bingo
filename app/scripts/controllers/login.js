'use strict';


/**
 * @ngdoc function
 * @name nadmin1App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nadmin1App
 */
angular.module('nadmin1App')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['Authentification',"$scope","Events","$state"];

function LoginCtrl(Authentification,$scope,Events,$state) {
  console.log("llamando el controlador");
  var loginctrl = this;

  //modelos
  loginctrl.name = "";
  loginctrl.pass = "";

  //metodos
  loginctrl.signIn = signIn;


    function signIn(){
      console.log("click en sign in");

      var nombre = loginctrl.name;
      var pass = loginctrl.pass;
      var isNoEmty = (nombre !== "" && pass !== "");
      if(isNoEmty){
        console.log("dentro del id",isNoEmty);
        Authentification.login(nombre,pass)
          .then(function (result) {
            loginctrl.userInfo = result;
            console.info("loginctrl.userInfo",loginctrl.userInfo);
            //console.log($state.get('app'));
            $scope.$emit(Events.ON_LOGIN_CHANGE,{usuario:loginctrl.userInfo.userName});
            
            $state.go('app',{}).then(function (argument) {
              console.log(argument);
            },function (a,b,c) {
              console.trace(a,b,c);
            })
            
          }, function (error) {
            //$window.alert("Invalid credentials");
            console.log("Invalid credentials",error);
          });
      }//TODO poner como validacion en la lista que los 2 campos sean obligatorios


    }
}
