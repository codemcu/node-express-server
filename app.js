'use strict'

var http = require('http');
var express = require('express');
var iniparser = require('iniparser');
var mysql = require('mysql');

var config = iniparser.parseSync('./config.ini');

function mySQLConn() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'libros'
  })
}

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'libros'
});

conn.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

conn.query('SELECT * FROM libro', (err, rows) => {
  if(err) throw err;

  rows.forEach( (row) => { 
    console.log(`El autor de "${row.titulo}" es ${row.autor}`); 
  });

  // console.log(rows);
});

conn.end((err) => {
  // The connection is terminated ok
});



var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

// middlewares
app.use(express.static('./public'));
app.use(express.responseTime());
app.use(express.logger());
app.use(app.router);
app.use(express.errorHandler());

// NODE_ENV environment
// app.configure('production', function () {
//   app.get('/', function (req, res) {
//     res.render('index', { 
//       title: config.title, 
//       message: config.message 
//     });
//   });
// });

// app.configure('development', function () {
//   app.use(express.errorHandler());
//   app.get('/', function (req, res) {
//     res.send('development mode test');
//   });
// });

app.configure(function () {
  app.get('/test', function (req, res) {
    res.send('works on all environment');
  });
});

app.get('/', function (req, res) {
  res.render('index', {
    title: config.title,
    message: config.message
  });
});


http.createServer(app).listen(3000, function () {
  console.log('App running...');
});

