const express = require('express');
const path = require('path');
const app = express();
const { cats } = require('../data/cats');

// Built in middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// App routes
// require('./controllers/cats')
app.use('/cats/:id', (req, res) => {
  const { id } = req.params;
  const correctCat = cats.find((cat) => cat.id === id);
  res.json(correctCat);
});
app.use('/cats', (req, res) => {
  res.json(
    cats.map(({ id, name }) => {
      return { id, name };
    })
  );
});

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
