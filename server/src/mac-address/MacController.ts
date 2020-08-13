import {Request, Response} from "express";
import MacService from './MacService'

export default class MacController {
  async index(request: Request, response: Response) {
    return MacService.index(request, response);
  }

  async create(request: Request, response: Response) {
    return MacService.create(request, response);
  }
}
