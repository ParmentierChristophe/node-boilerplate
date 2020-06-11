import express from 'express';
import middlewaresConfig from './config/middlewares';
import itemRouter from './modules/item/router';
import listRouter from './modules/list/router';

const app = express();
middlewaresConfig(app);

app.use('/api', [itemRouter, listRouter]);

app.listen(8081, function () {
  console.log('app listening on port 8081!');
});
