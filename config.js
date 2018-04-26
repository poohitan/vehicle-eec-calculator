const knex = require('./knexfile');

module.exports = {
  port: 3601,

  db: knex,
};
