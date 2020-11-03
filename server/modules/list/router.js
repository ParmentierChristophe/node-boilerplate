import { Router } from 'express';
import controllers from './controllers';

const routes = new Router();

/**
 * @swagger
 * /list:
 *    get:
 *      tags:
 *          - List
 *      summary: this should list all of lists.
 *      description: List all of `Lists`.
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description: Get a list of Lists.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Lists'
 *      schema:
 *          $ref: '#/components/schemas/Lists'
 */
routes.get('/list', controllers.getMany);
routes.post('/list', controllers.createOne);

routes.get('/list/:id', controllers.getOne);
routes.delete('/list/:id', controllers.removeOne);
routes.put('/list/:id', controllers.updateOne);

export default routes;
