import {Response, Request} from "express";
import db from "../database/connection";
import {MacAddress} from "./MacAddress";

class MacService {
  async index(request: Request, response: Response) {
    const macList: MacAddress[] = await db('mac_address').limit(20);

    return response.json(macList);
  }

  async create(request: Request, response: Response) {

    const trx = await db.transaction();

    try {
      await trx('mac_address').insert({
        name: request.body.name,
        mac_address: request.body.macAddress,
        description: request.body.description,
        binary_id: request.body.binaryId ? request.body.binaryId : null
      });
      trx.commit();
      return response.status(201).send('')
    }catch (error) {
      trx.rollback();
      return response.status(404).send({
        'errorMsg': 'Error to Insert data.',
        'errorLog': error.errorMsg
      })
    }
  }
}

export default new MacService();
