
var uniq = require('..');
var assert = require('assert');

describe('uniq', function() {

  it('should work', function() {

    var arr = [];
    var el;
    var i;
    for (i = 0; i < 5000; i++) {
      el = uniq();
      assert(arr.indexOf(el) === -1);
      arr.push(el);
    }
    assert(arr.length === 5000);

  });
});