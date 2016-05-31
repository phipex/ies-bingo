'use strict';

describe('Controller: GeneralctlCtrl', function () {

  // load the controller's module
  beforeEach(module('nadmin1App'));

  var GeneralctlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeneralctlCtrl = $controller('GeneralctlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GeneralctlCtrl.awesomeThings.length).toBe(3);
  });
});
