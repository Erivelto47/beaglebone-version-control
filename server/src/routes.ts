import express, {Request, Response} from 'express';

import BinaryController from "./binary/BinaryController";
import MacController from "./mac-address/MacController";
import LogController from "./log/LogController";

import {uploadFile} from "./MulterConfig";
import {Binary} from "./binary/Binary";

const routes = express.Router();
const binaryController = new BinaryController();
const macController = new MacController();
const logController = new LogController();


routes.get('/mac', ((req: Request, res: Response) => macController.index(req, res)))
routes.post('/mac', ((req: Request, res: Response) => macController.create(req, res)))

routes.get('/log', ((req: Request, res: Response) => logController.index(req, res)))
routes.post('/log', ((req: Request, res: Response) => logController.create(req, res)))

routes.get('/binary', (req: Request, res: Response) => binaryController.index(req, res))
routes.post('/binary', function (req: Request, res: Response) {
  uploadFile(req, res, () => {
    binaryController.create(req, res);
  })
});
routes.get('/binary/:id', (req: Request, res: Response) => {
  const binaryPromise = binaryController.findOne(req.params.id);
  binaryPromise
    .then((binary: Binary) => {
      const path = __dirname + '/database/local-storage/' + binary.fileName;

      return res.download(path, binary.originalName);
    })
    .catch(reason => {
      console.log(reason)
      return res.status(400);
    })
})

export default routes;
