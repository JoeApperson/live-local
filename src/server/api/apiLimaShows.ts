import { Application, Request, Response } from 'express';
const archive = require('archive.org');

const BASE_ROUTE = '/api/lima-shows';

/* GET Live Music Archive Show listing. */
export function apiGetLimaShows(app: Application) {

  app.route(BASE_ROUTE).get((req: Request, res: Response) => {
    const searchFor = {
      q: req.query.q,
      fl: ['identifier', 'avg_rating', 'title', 'creator', 'description'],
      rows: 5000
    };

    archive.search(searchFor, (error, response) => {
      if (error) {
        console.log('\n\n\nOops, an error!', error, '\n\n\n');
        res.status(500).json({error: error});
      } else {
        res
          .status(200)
          .type('json')
          .json(response);
      }
    });
  });
}

export function apiGetLimaShow(app: Application) {

  app.route(BASE_ROUTE + '/:id').get((req: Request, res: Response) => {
    res
      .status(200)
      .type('json')
      .json({response: 'respond with Live Music Archive resource for id', showId: req.params.id});
  });
}
