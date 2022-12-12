import { Service } from 'typedi';
import { Router } from "express";

import { logger } from "../../middleware";

@Service('app.router')
export class RouterService {
  router: Router;

  constructor() {
    this.router = Router();

    this.router.get('/', logger, (req, res): void => {
      res.send('Hello World');
    })
    // app.use(express.urlencoded({ extended: true }));
    // app.use(xmlparser());
    // app.post('/receive-xml', function (req, res, next) {

    //   // req.body contains the parsed xml
    //   console.log(req.body)
    //   res.type('xml').send(json2xml(JSON.stringify(req.body), { compact: true, spaces: 2, attributesKey: '$' }));

    // });
  }
}

