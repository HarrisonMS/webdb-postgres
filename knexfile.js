require('dotenv').config();
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'bookr',
      port: 6234,
      user: 'postgres',
      password:  'docker' // should never check pw into source control process.env.DB_PW
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/prodseeds',
    }
  },
  // development: {
  //   client: 'sqlite3',
  //   useNullAsDefault: true,
  //   connection: {
  //     filename: './data/dev.sqlite3'
  //   },
  //   pool: {
  //     afterCreate: (conn, done) => {
  //       conn.run('PRAGMA foreign_keys = ON', done);
  //     },
  //   },
  //   migrations: {
  //     directory: './data/migrations',
  //     tableName: 'knex_migrations'
  //   },
  //   seeds: {
  //     directory: './data/prodseeds',
  //   }
  // },
  // testing: {
  //   client: 'sqlite3',
  //   useNullAsDefault: true,
  //   connection: {
  //     filename: ':memory:'
  //   },
  //   pool: {
  //     afterCreate: (conn, done) => {
  //       conn.run('PRAGMA foreign_keys = ON', done);
  //     },
  //   },
  //   migrations: {
  //     directory: './data/migrations',
  //     tableName: 'knex_migrations'
  //   },
  //   seeds: {
  //     directory: './data/seeds',
  //   }
  // },
  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL, 
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/seeds',
    }
  },
  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/prodseeds',
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/prodseeds',
    }
  },
};
