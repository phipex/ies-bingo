'use strict';

/**
 * @ngdoc service
 * @name nadmin1App.Session
 * @description
 * # Session
 * Service in the nadmin1App.
 */
angular.module('nadmin1App')
  .service('Session', function ($http) {
    this.current = function(){
      // this will be a custom server response later
      return $http.get('data/user.json');
    };
  });
