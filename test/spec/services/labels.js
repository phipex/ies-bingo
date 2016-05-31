'use strict';

describe('Service: Labels', function () {

  // load the service's module
  beforeEach(module('nadmin1App'));

  // instantiate service
  var Labels;
  beforeEach(inject(function (_Labels_) {
    Labels = _Labels_;
  }));

  it('should do something', function () {
    expect(!!Labels).toBe(true);
  });

});
