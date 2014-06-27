
var request = require('superagent');
var origin = 'http://localhost:3700';

function Teams() {
}

Teams.prototype.get = function(callback) {
  request
    .get(origin + '/teams')
    .end(function(error, data) {
      console.log(data.body);
      callback(error, data.body);
    });
};

module.exports = new Teams();
