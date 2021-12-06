const express = require('express');
const logger = require('./lib/logger')();
const routes = require('./index.routes');

const app = express();

const PORT = 3000;

app.use(routes);

app.get('/', (req, res) => {
  res.send('Greetings, Server is running!!!');
});

app.listen(PORT, () => {
  logger.info(`Ajay's Server is up on port ${PORT}...`);
});
