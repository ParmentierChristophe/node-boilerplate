import express from 'express';
import middlewaresConfig from './config/middlewares';
import itemRouter from './modules/item/router';
import listRouter from './modules/list/router';
import userRouter from './modules/user/router'
import swaggerUi from 'swagger-ui-express';
import specs from './utils/swagger';

const app = express();
middlewaresConfig(app);
app.use('/api', [itemRouter, listRouter, userRouter]);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(8081, function () {
  console.log('app listening on port 8081!');
});
