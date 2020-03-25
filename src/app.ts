import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes';

import createTypeormConn from './database';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.database();
    this.routes();
    this.middlewares();
  }

  private routes(): void {
    this.server.use(routes);
  }

  private middlewares(): void {
    this.server.use(cors());
  }

  private async database(): Promise<void> {
    await createTypeormConn();
  }
}

export default new App().server;
