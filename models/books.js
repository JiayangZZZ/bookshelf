
var request = require('superagent');
var origin = 'http://localhost:3700';

function Books() {
}

Books.prototype.get = function(callback) {
  request
    .get(origin + '/books')
    // .send({
    //   // username : 'jiayang',
    //   // password : 'password',
    //   // clientId : this.read().clientId,
    //   // clientSecret : this.read().clientSecret
    // })
    .end(function(error, data) {
      console.log(data);
      callback(error, data);
    });
};

module.exports = new Books();
