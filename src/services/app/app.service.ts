import { Service, Container, Inject } from 'typedi';
import express, { type Application as ExApplication } from 'express'

import { RouterService } from '../router/router.service';

Container.set('PORT', Number(process.env.PORT) || 4200);

@Service('app')
export class AppService {
  app: ExApplication;

  @Inject('PORT')
  port!: number;

  @Inject('app.router')
  router!: RouterService;

  constructor() {
    this.app = express();
  }

  start() {
    try {
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(this.router.router);

      this.app.listen(this.port);
      console.log('[⚡️] Server is listening on http://localhost:' + this.port);
    } catch (err) {
      console.error(err);
    }
  }
}
