# Node.js Typescript Template with TypeORM

This project is prettended to be a template configured with the most common settings and dependencies of a Node.js project

## The following dependencies are already installed in this project

- eslint/prettier
- typeorm
- jest
- entity-factory
- ts-node-dev
- commitlint
- commitizen
- express
- tsconfig-paths

### Detailed configurations

#### Styleguide

`eslint/prettier` configured with airbnb styleguide and typescript support

#### Database

Configured typeorm with separated ormconfig for test and development using .env files
For production: .env.sample counts with TYPEORM env vars to be configurated

Example file on how to configure a basic model/entity for typeorm

Modularized database connection configuration to be reused in any part of application like tests

#### Jest

configured jest to be use with typescript that reads `__tests__` directory for files with one of the following extension:

```
- .spec.js
- .spec.ts
- .test.js
- .test.ts
```

example test file with database connection, table truncation `beforeEach` test run and connection close `afterEach` run

and generates code coverage in "lcov" format that reads files in src directory

#### Entity-factory

sample `@entity-factory/core` and `@entity-factory/typeorm` for fake data generation using typeorm

#### GIT

configured commitlint w/ husky to respect config-conventional when committing
configured commitizen w/ husky to interativelly standardize commit messages following config conventional rules
configured .gitignore to exclude node_modules, .env and coverage from commits

#### General

- configured "dev" script to run server with ts-node-dev
- configured tsconfig.json with most common configurations
- configured express with cors middleware

#### Others

- Project specific dependencies, such as database drivers, must be manually installed/configured
- customize the application port and host throught .env files or directly on environment
- tsconfig-paths configuration example
