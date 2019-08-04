'use strict';

const data = require('./data/anuncios.json');
const Anuncio = require('./models/Anuncio');
const mongoose = require('mongoose');
const conn = mongoose.connection;

conn.once('open', async () => {
  console.log('Creating DB in', mongoose.connection.name);
  await Anuncio.deleteMany({});
  Anuncio.insertMany(data);
});

mongoose.connect('mongodb://localhost/nodepop', { useNewUrlParser: true });


