var express = require('express')
  , http = require('http')
  , request = require('request')
  , requirejs = require('requirejs');

var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 3800);
  app.use(express.logger('dev'));
  app.use(express.static(__dirname));
  app.use(express.bodyParser());
});

requirejs.config({
  baseUrl : __dirname,
  nodeRequire : require
});

// var tmpl = requirejs('./public/templates/tmpl');

// var listItems = require('./models/listItems')
//   , todos = require('./models/todos')
//   , todo = require('./models/todo');
var books = require('./models/books');
var tpml = requirejs('./public/templates/tmpl');

app.get('/books', function(req, res) {
  books.get(function(err, list) {
    if(!err) {
      // console.log(list);
      res.send(tmpl.html({
        header : tmpl.header(),
        container : tmpl.container()
      }));
    }
    else
      res.send('nothing');
  })
});


http.createServer(app).listen(app.get('port'), function() {
  console.log('Server started on port: ' + app.get('port'));
});
