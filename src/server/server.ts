import * as express from 'express';
import { Application } from 'express';
import * as logger from 'morgan';

import { apiGetHappening, apiGetHappenings } from './api/apiHappenings';
import { apiGetLimaShow, apiGetLimaShows } from './api/apiLimaShows';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

apiGetHappening(app);
apiGetHappenings(app);
apiGetLimaShow(app);
apiGetLimaShows(app);

app.listen(8065, () => {
  console.log('Server is now running on port 8065 ...');
});
