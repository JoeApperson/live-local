import * as express from 'express';
import { Application } from 'express';
import * as logger from 'morgan';

import { apiGetHappening, apiGetHappenings } from './api/apiHappenings';
import { apiGetLimaShow, apiGetLimaShows } from './api/apiLimaShows';

const bodyParser = require('body-parser');

const app: Application = express();
const port = process.env.PORT || '8065';
const publicWWW = process.cwd() + '/dist';

export const fileOptions = {
  root: publicWWW
};

app.set('port', port);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(publicWWW));

addAppRoutes(app);
apiGetHappening(app);
apiGetHappenings(app);
apiGetLimaShow(app);
apiGetLimaShows(app);

app.listen(port, () => {
  console.log(`Server is now running on port ${port} ...`);
});

function addAppRoutes(exApp: Application) {
  const appRoutes = [
    '/',
    '/happenings',
    '/thisday',
    '/about',
    '/home'
  ];

  appRoutes.forEach(r => {
    exApp.get(r, (_req: express.Request, res: express.Response) => {
      res.sendFile('/index.html', fileOptions);
    });
  });
}
