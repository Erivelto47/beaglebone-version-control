import {Request, Response} from "express";
import db from "../database/connection";
import fs from 'fs';

import {Binary} from "./Binary";

class BinaryService {
  async index(request: Request, response: Response) {
    const binaryList: Binary[] = await db('binary').limit(20);

    return response.json(binaryList);
  }

  async findOne(id: string): Promise<Binary> {
    const result = await db('binary')
      .where('id', id).first();

    return {
      id: result.id,
      version: result.version,
      fileName: result.filename,
      originalName: result.originalname,
      destination: result.destination,
      size: result.size,
    };
  }

  async create(request: Request, response: Response) {

    const trx = await db.transaction();

    try {
      await trx('binary').insert({
        version: request.body.version,
        fileName: request.file.filename,
        originalname: request.file.originalname,
        destination: request.file.destination,
        size: request.file.size,
      });
      trx.commit();
      return response.status(201).send()
    } catch (error) {
      trx.rollback();
      fs.unlink('../database/local-storage/' + request.file.filename, (err => {
        if (err) {
          console.log("erro ao excluir arquivo: " + request.file.filename)
        }
      }));
      return response.status(404).send({
        'errorMsg': 'Error to Insert Data.',
        'errorLog': error.errorMsg
      })
    }
  }
}

export default new BinaryService();
