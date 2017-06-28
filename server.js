'use strict';

var express = require('express');

var app = express();

app.set('view engine', 'pug');
//definir e indicar que sirva de manera estatica esta carpeta
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/signup', (req, res) => {
  res.render('index');
});

app.get('/signin', (req, res) => {
  res.render('index');
});

app.listen(3000, (err) => {
  if(err)
  {
    return console.log('Hubo un error'), process.exit(1);
  }

  console.log('familiagram escuchando en el puerto 3000');
});
