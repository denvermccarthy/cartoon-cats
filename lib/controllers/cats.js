const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router().get('/cats', (req, res) => {
  res.json(cats);
});
