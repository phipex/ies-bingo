'use strict';

describe('Service: Events', function () {

  // load the service's module
  beforeEach(module('nadmin1App'));

  // instantiate service
  var Events;
  beforeEach(inject(function (_Events_) {
    Events = _Events_;
  }));

  it('should do something', function () {
    expect(!!Events).toBe(true);
  });

});
