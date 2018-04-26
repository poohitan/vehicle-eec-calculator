const Case = require('case');

module.exports = row => Object.keys(row).reduce((result, rowName) => {
  const camelizedName = Case.camel(rowName);
  const value = row[rowName];

  return Object.assign({}, result, {
    [camelizedName]: value,
  });
}, {});
