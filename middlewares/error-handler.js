const HTTPStatus = require('http-status-codes');

/**
 * Handles all the errors, serializes them and sends in the response
 */
module.exports = (error, req, res, next) => { // eslint-disable-line
  const status = error.status || HTTPStatus.INTERNAL_SERVER_ERROR;

  if (error.message) {
    return res.status(status).json({ error: error.message });
  }

  return res.sendStatus(status);
};
