
var request = require('superagent');
var origin = 'http://localhost:3700';

function Setting() {
}

Setting.prototype.get = function(callback) {
  request
    .get(origin + '/setting')
    .end(function(error, data) {
      console.log(data.body);
      callback(error, data.body);
    });
};

module.exports = new Setting();
