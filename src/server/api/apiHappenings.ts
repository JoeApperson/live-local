import { Application, Request, Response } from 'express';
import * as data from '../data/happenings.json';

const BASE_ROUTE = '/api/happenings';
export function apiGetHappenings(app: Application) {

  const staticData = process.cwd() + '/data/happenings.json';
  app.route(BASE_ROUTE).get((req: Request, res: Response) => {
    res.status(200).json(data);
  });
}

export function apiGetHappening(app: Application) {

  app.route(BASE_ROUTE + '/:id').get((req: Request, res: Response) => {
    res.status(200).json({ response: 'respond with happening resource for id', happeningId: req.params.id });
  });
}
