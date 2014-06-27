
var request = require('superagent');
var origin = 'http://localhost:3700';

function Book() {
}

Book.prototype.get = function(id, callback) {
  request
    .get(origin + '/book/' + id)
    .end(function(error, data) {
      // console.log(data.body);
      callback(error, data);
    });
    console.log('whats wrong');
};

module.exports = new Book();
