module.exports.up = knex => knex.schema.createTable('calculations', (table) => {
  table.increments('id');
  table.float('vehicle_weight');
  table.float('co2_value');
  table.float('co2_ref_value');
  table.float('deviation');
  table.timestamps(false, true);
});

module.exports.down = knex => knex.schema.dropTableIfExists('calculations');
