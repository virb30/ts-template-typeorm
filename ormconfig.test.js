module.exports = {
  type: 'sqlite',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: '__tests__/test.sqlite',
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
