const Case = require('case');

/**
 * Takes a row of data from DB table
 * and converts column names from snake_case to camelCase
 */
module.exports = row => Object.keys(row).reduce((result, rowName) => {
  const camelizedName = Case.camel(rowName);
  const value = row[rowName];

  return Object.assign({}, result, {
    [camelizedName]: value,
  });
}, {});
