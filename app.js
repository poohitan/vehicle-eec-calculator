const express = require('express');
const bodyParser = require('body-parser');
const HTTPStatus = require('http-status-codes');

const config = require('./config');
const routes = require('./routes');
const contentTypeValidator = require('./middlewares/content-type-validator');
const errorHandler = require('./middlewares/error-handler');

const app = express();

app.get('/', (req, res) => res.sendStatus(HTTPStatus.OK));

app.use(contentTypeValidator);
app.use(bodyParser.json());

app.use('/calculate', routes.calculate);
app.use('/list', routes.list);

app.use(errorHandler);

app.listen(config.port, () => console.log(`App listening on port ${config.port}`));
