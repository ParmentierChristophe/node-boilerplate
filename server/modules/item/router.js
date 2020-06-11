import { Router } from 'express';
import controllers from './controllers';

const routes = new Router();

routes.get('/item', controllers.getMany);
// routes.post('/item', controllers.createOne);

// routes.get('/item/:id', controllers.getOne);
// routes.delete('/item/:id', controllers.removeOne);
// routes.put('/item/:id', controllers.updateOne);

export default routes;
