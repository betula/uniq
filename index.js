var crypto = require('crypto');

var uniq = module.exports = function() {
  return uniq.chars64(24)
};

uniq.bytes = function(len) {
  var ret;
  if (len < 10) {
    ret = crypto.randomBytes(len);
  }
  else {
    var ms = Date.now();
    var b = new Buffer(8);
    b.writeDoubleBE(ms, 0);
    ret = Buffer.concat([b, crypto.randomBytes(len - 8)]);
  }
  return ret;
};

uniq.chars64 = function(len) {
  return uniq.bytes(Math.ceil(len * 3 / 4))
    .toString('base64')
    .slice(0, len)
    .replace(/\//g, '-')
    .replace(/\+/g, '_');
};