import { Router } from 'express';
import controllers from './controllers';

const routes = new Router();

routes.get('/list', controllers.getMany);
routes.post('/list', controllers.createOne);

routes.get('/list/:id', controllers.getOne);
routes.delete('/list/:id', controllers.removeOne);
routes.put('/list/:id', controllers.updateOne);

export default routes;
