import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.routes();
    this.middlewares();
  }

  private routes(): void {
    this.server.use(routes);
  }

  private middlewares(): void {
    this.server.use(cors());
  }
}

export default new App().server;
