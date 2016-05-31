'use strict';

/**
 * @ngdoc service
 * @name nadmin1App.Authentification
 * @description
 * # Authentification
 * Factory in the nadmin1App.
 * factory que se encarga de administrar el login del usuario
 */
angular.module('nadmin1App')
  .factory('Authentification', function ($http, $q, $window) {
    /
    var userInfo = {
      accessToken: null,
      userName: null
    };

    function login(userName, password) {
      var deferred = $q.defer();

      $http.get("data/login.json", {
        userName: userName,
        password: password
      }).then(function(result) {
        userInfo.accessToken= result.data.access_token;
        userInfo.userName= result.data.userName;
        $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
        deferred.resolve(userInfo);
      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

    function logout() {
      userInfo.accessToken= null;
      userInfo.userName= null;
      $window.sessionStorage["userInfo"] = null;
    }

    function isLogin(){
      var res = false;
      if(userInfo.userName && userInfo.accessToken){
        return true;
      }

    }

    return {
      login: login,
      logout: logout,
      isLogin: isLogin
    };
  });
