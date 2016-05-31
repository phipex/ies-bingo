'use strict';


/**
 * @ngdoc function
 * @name nadmin1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nadmin1App
 */
angular.module('nadmin1App')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject= ['cssInjector'];

function MainCtrl(cssInjector){
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  this.repeatSelect = 'cerulean';
  this.cssList = [
    {id:1,"name":'cerulean'},
  {id:1,"name":'cosmo'},
  {id:1,"name":'cybord'},
  {id:1,"name":'darkly'}
  ];
this.data = {
    repeatSelect: null,
    availableOptions: [
      {id: '1', name: 'Option A'},
      {id: '2', name: 'Option B'},
      {id: '3', name: 'Option C'}
    ],
  };



  cssInjector.add("https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/"+this.repeatSelect+"/bootstrap.min.css");


}
