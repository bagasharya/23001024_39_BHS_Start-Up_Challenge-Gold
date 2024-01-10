/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('products', (table) => {
    table.bigIncrements('id', { primaryKey: true });
    table.string('merk', 100).notNullable();
    table.string('varian', 100).notNullable();
    table.string('harga', 100).notNullable();
    table.string('desc', 100).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('products')
};
