import {Request, Response} from "express";
import LogService from './LogService';

export default class LogController {
  index(request: Request, response: Response) {
    return LogService.index(request, response);
  }

  create(request: Request, response: Response) {

    return LogService.create(request, response);
  }
}
