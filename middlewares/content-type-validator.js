const HTTPStatus = require('http-status-codes');

module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.headers['content-type'] !== 'application/json') {
    return next({ status: HTTPStatus.UNSUPPORTED_MEDIA_TYPE });
  }

  return next();
};
