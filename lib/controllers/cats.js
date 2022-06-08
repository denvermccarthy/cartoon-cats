const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router()
  .get('/', (req, res) => {
    const format = cats.map(({ id, name }) => {
      return { id, name };
    });
    res.json(format);
  })
  .get('/:id', (req, res) => {
    const { id } = req.params;
    const find = cats.find((cat) => cat.id === id);
    res.json(find);
  });
