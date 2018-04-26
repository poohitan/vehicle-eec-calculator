const HTTPStatus = require('http-status-codes');

module.exports = (error, req, res, next) => { // eslint-disable-line
  const status = error.status || HTTPStatus.INTERNAL_SERVER_ERROR;

  if (error.message) {
    return res.status(status).json({ error: error.message });
  }

  return res.sendStatus(status);
};
