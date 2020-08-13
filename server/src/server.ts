import app from './app'
import {Request, Response} from "express";

app.all('/*', function(req: Request, res: Response, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.listen(4444)
