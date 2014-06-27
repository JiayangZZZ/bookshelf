
var request = require('superagent');
var origin = 'http://localhost:3700';

function Books() {
}

Books.prototype.get = function(callback) {
  request
    .get(origin + '/books')
    .end(function(error, data) {
      console.log(data.body);
      callback(error, data.body);
    });
};

module.exports = new Books();
