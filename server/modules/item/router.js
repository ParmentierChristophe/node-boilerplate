import { Router } from 'express';
import controllers from './controllers';

const routes = new Router();


/**
 * @swagger
 * /item:
 *    get:
 *      tags:
 *          - Item
 *      summary: this should list all item.
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description: Receive back flavor and flavor Id of recently added cookie.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Items'
 *      schema:
 *          $ref: '#/components/schemas/Items'
 */
routes.get('/item', controllers.getMany);
routes.post('/item', controllers.createOne);

routes.get('/item/:id', controllers.getOne);
routes.delete('/item/:id', controllers.removeOne);
routes.put('/item/:id', controllers.updateOne);

export default routes;
