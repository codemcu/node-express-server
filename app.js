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

  var librosList = [];
  var conn = mySQLConn();
  conn.connect();

  conn.query('SELECT * FROM libro', (err, rows) => {
    if (err) {
      console.log('Error connecting to Db');
      return;
    } else {
      console.log('Connection established');
      rows.forEach((row) => {
        var libro = {
          id_libro: row.id_libro ,
          titulo: row.titulo ,
          autor: row.autor ,
          isbn: row.isbn ,
          numero_paginas: row.numero_paginas ,
          genero: row.genero ,
        }
        librosList.push(libro);
      });
    } 
    res.render('index', {
      librosList: librosList
    });
  });
  // conn.end(err);
});


http.createServer(app).listen(3000, function () {
  console.log('App running...');
});

