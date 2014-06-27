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

var books = require('./models/books')
  , book = require('./models/book');

var tmpl = requirejs('./public/templates/tmpl');

app.get('/', function(req, res) {
  res.send(tmpl.html({
    header : tmpl.header(),
    container : tmpl['container-index']()
  }));
})

app.get('/books', function(req, res) {
  books.get(function(err, list) {
    if(!err) {
      // console.log(list);
      res.send(tmpl.html({
        header : tmpl.header(),
        container : tmpl['container-books']({ books : list })
      }));
    }
    else
      res.send('error');
  })
});

app.get('/book/:id', function(req, res) {
  book.get(req.param('id'), function(err, book) {
    if(!err) {
      res.send(tmpl.html({
        header : tmpl.header(),
        container : tmpl['container-book']()
      }));
    }
    else
      res.send('error');
  })
})


http.createServer(app).listen(app.get('port'), function() {
  console.log('Server started on port: ' + app.get('port'));
});
