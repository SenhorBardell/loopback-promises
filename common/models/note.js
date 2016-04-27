var BluebirdPromise = require('bluebird');

module.exports = function(Note) {
  Note.greet = function(msg) {
    // no callback
    // without return the route never resolved
    return new Promise((resolve, reject) => {
      if (msg === 'hello') return reject('Error message');
      resolve({test: true});
    });
  };

  Note.greet2 = function(msg, cb) {
    // return new ... will cause unhandled rejection
    new BluebirdPromise((resolve, reject) => {
      if (msg === 'hello') return reject('Error message');
      resolve({test: true});
    }).asCallback(cb);
  };

  Note.greet3 = function(msg) {
    return new BluebirdPromise((resolve, reject) => {
      if (msg === 'hello') return reject('Error message');
      resolve({test: true});
    });
  };

  Note.greet4 = function(msg, cb) {
    if (msg === 'hello') return cb('Error message');
    cb(null, {test: true});
  };
};
