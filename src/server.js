const express = require('express');
const { MangaSearchRouter } = require('./routes/');

const app = express();

app.use(express.json());

app.use('/manga-search', MangaSearchRouter);

app.listen(8080, () => {
  console.log('Server started');
});