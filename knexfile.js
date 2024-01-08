// Update with your config settings.
const connections = {
  client: 'pg',
  connection: {
      host: '127.0.0.1',
      port: '5432',
      user: 'postgres',
      database: 'products',
      password: 'panorama3',
  }
}

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: connections,
  staging: connections,
  production: connections
};
