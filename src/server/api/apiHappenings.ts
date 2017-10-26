import { Application, Request, Response } from 'express';

const BASE_ROUTE = '/api/happenings';
export function apiGetHappenings(app: Application) {

  app.route(BASE_ROUTE).get((req: Request, res: Response) => {
    res.status(200).json({ response: 'respond with the happenings resource' });
  });
}

export function apiGetHappening(app: Application) {

  app.route(BASE_ROUTE + '/:id').get((req: Request, res: Response) => {
    res.status(200).json({ response: 'respond with happening resource for id', happeningId: req.params.id });
  });
}
