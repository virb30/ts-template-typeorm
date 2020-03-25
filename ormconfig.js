const dotenv = require('dotenv');

const { parsed } = dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

Object.keys(parsed).forEach(key => {
  process.env[key] = parsed[key];
});

module.exports = [
  {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'docker',
    database: process.env.DB_NAME || 'auth',
    synchronize: false,
    logging: false,
    entities: ['src/app/models/**/*.ts'],
    migrations: ['src/database/migrations/**/*.ts'],
    subscribers: ['src/database/subscribers/**/*.ts'],
    migrationsTableName: 'schema_updates',
    dropSchema: false,
    cli: {
      migrationsDir: 'src/database/migrations',
      entitiesDir: 'src/app/models',
      subscribersDir: 'src/database/subscribers',
    },
  },
];
