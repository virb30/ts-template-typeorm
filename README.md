# Node.js Typescript Template with TypeORM

This project is prettended to be a template configured with the most common settings and dependencies of a Node.js project

## The following dependencies are already installed in this project

- eslint/prettier
- typeorm
- jest
- ts-node-dev
- commitlint
- express
- sqlite (for tests)

### Detailed configurations

#### Styleguide

eslint/prettier configured with airbnb styleguide and typescript support

### Database

Configured typeorm with separated ormconfig files for test and development
For production: .env.sample counts with TYPEORM env vars to be configurated

### Jest

configured jest to be use with typescript that reads `__tests__` directory for files with one of the following extension:

```
- .spec.js
- .spec.ts
- .test.js
- .test.ts
```

and generates code coverage in "lcov" format that reads files in src directory

### GIT

configured commitlint/husky to respect config-onventional when committing
configured .gitignore to exclude node_modules, .env and coverage from commits

### General

- configured "dev" script to run server with ts-node-dev
- configured tsconfig.json with most common configurations
- configured express with cors middleware

### Others

- Project specific dependencies, such as database drivers, must be manually installed/configured
- customize the application port and host throught env
