const express = require('express');
const path = require('path');
const app = express();
const catHandler = require('./controllers/cats');
// Built in middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// App routes
// require('./controllers/cats')

app.use('/cats', catHandler);

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
