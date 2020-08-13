import {Response, Request} from "express";
import db from "../database/connection";
import Log from "./Log";

class LogService {

  async index(request: Request, response: Response) {
    const logList: Log[] = await db('log').limit(20);

    return response.json(logList);
  }

  async create(request: Request, response: Response) {

    const trx = await db.transaction();

    try {
      await trx('log').insert({
        date: request.body.date ? request.body.date : new Date('dd/mm/yyyy HH:mm:ss'),
        mac_id: request.body.macId,
        binary_id: request.body.binaryId ? request.body.binaryId : null
      });
      trx.commit();
      return response.status(201).send()
    }catch (error) {
      trx.rollback();
      return response.status(404).send({
        'errorMsg': 'Error to Insert Data',
        'errorLog': error.errorMsg
      })
    }
  }
}

export default new LogService();
