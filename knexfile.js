const camelizeColumnNames = require('./helpers/camelize-column-names');

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: './dev.sqlite',
  },

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite',
    },
  },

  useNullAsDefault: true,

  postProcessResponse: (result) => {
    if (Array.isArray(result)) {
      return result.map(row => camelizeColumnNames(row));
    }

    return camelizeColumnNames(result);
  },
};
