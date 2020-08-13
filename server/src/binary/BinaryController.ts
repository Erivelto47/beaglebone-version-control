import {Request, Response} from "express";
import BinaryService from "./BinaryService";

export default class BinaryController {
  async index(request: Request, response: Response) {
    return BinaryService.index(request, response);
  }

  async create(request: Request, response: Response) {
    return BinaryService.create(request, response);
  }
}
