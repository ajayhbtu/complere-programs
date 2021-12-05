const express = require('express');
const logger = require('./lib/logger')();

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Greetings, Server is running!!!');
});

app.listen(PORT, () => {
  logger.info(`My Server is up on port ${PORT}...`);
});
