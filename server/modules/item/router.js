import { Router } from 'express';
import controllers from './controllers';

const routes = new Router();


/**
 * @swagger
 * /item:
 *    get:
 *      tags:
 *          - Item
 *      summary: this should list all of items.
 *      description: List all of items.
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

  /**
   * @swagger
   * /item:
   *   post:
   *     tags: 
   *        - Item
   *     summary: this should create an item.
   *     description: Create new `Item`.
   *     produces:
   *       - 
   *       - application/json
   *       - text/plain
   *     parameters:
   *       - in: body
   *         name: body
   *         required: true
   *         schema:
   *           $ref: '#/components/schemas/Item'
   *         description: The `Item` entity to create.
   *     responses:
   *       200:
   *         description: The `Item` was created successfully.
   *         schema:
   *           type: object
   *           properties:
   *             status:
   *               type: string
   *               example: success
   *             data:
   *               $ref: '#/components/schemas/Item'
   *             errors:
   *               description: An empty array (always when success).
   *               type: array
   *               items:
   *                 type: object
   *               example: []
   *       400:
   *         description: Invalid input data.
   *       404:
   *         description: Non-existent `ITEM` or lack of permission to see it.
   *
   */
routes.post('/item', controllers.createOne);


/**
 * @swagger
 * /item/{id}:
 *    get:
 *      tags:
 *          - Item
 *      summary: this should list an item by id.
 *      description: List an item by id.
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          type: string
 *          format: ObjectId
 *          description: ID of Item to be retrieved
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
routes.get('/item/:id', controllers.getOne);
routes.delete('/item/:id', controllers.removeOne);
routes.put('/item/:id', controllers.updateOne);

export default routes;
