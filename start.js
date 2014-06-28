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
  , book = require('./models/book')
  , teams = require('./models/teams')
  , setting = require('./models/setting');

var tmpl = requirejs('./public/templates/tmpl');

app.get('/', function(req, res) {
  res.send(tmpl.html({
    header : tmpl.header(),
    container : tmpl['container-index']()
  }));
})

app.get('/book/2', function(req, res) {
  res.send(tmpl.html({
    header : tmpl.header(),
    container : tmpl['containerBook2']()
  }));
})

app.get('/team/2', function(req, res) {
  res.send(tmpl.html({
    header : tmpl.header(),
    container : tmpl['containerTeam2']()
  }))
})

app.get('/create', function(req, res) {
  res.send(tmpl.html({
    header : tmpl.header(),
    container : tmpl['containerCreate']()
  }))
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

// app.get('/book/:id', function(req, res) {
//   book.get(req.param('id'), function(err, book) {
//     if(!err) {
//       res.send(tmpl.html({
//         header : tmpl.header(),
//         container : "jlksdjf"
//       }));
//     }
//     else
//       res.send('error');
//   })
// })

app.get('/teams', function(req, res) {
  teams.get(function(err, list) {
    if(!err) {
      res.send(tmpl.html({
        header : tmpl.header(),
        container : tmpl.containerTeams({ teams : list })
      }));
    }
    else
      res.send('error');
  })
})

app.get('/setting', function(req, res) {
  setting.get(function(err, list) {
    if(!err) {
      res.send(tmpl.html({
        header : tmpl.header(),
        container : tmpl.containerSetting({ settings : list })
      }))
    }
  })
})


http.createServer(app).listen(app.get('port'), function() {
  console.log('Server started on port: ' + app.get('port'));
});
