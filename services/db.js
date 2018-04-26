const knex = require('knex');
const config = require('../config');

const DB = knex(config.db);

module.exports = DB;
