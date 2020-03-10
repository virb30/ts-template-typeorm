module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'main',
  synchronize: false,
  logging: false,
  entities: ['src/app/models/**/*.ts'],
  migrations: ['src/database/migrations/**/*.ts'],
  subscribers: ['src/database/subscribers/**/*.ts'],
  migrationsTableName: 'schema_updates',
  cli: {
    migrationsDir: 'src/database/migration',
  },
};
