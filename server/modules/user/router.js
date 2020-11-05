import { Router } from 'express';
import * as UserController from './controllers';

const routes = new Router();

  /**
   * @swagger
   * /register:
   *   post:
   *     tags: 
   *        - User
   *     summary: this should create an user.
   *     description: Create new `User`.
   *     produces:
   *       - application/json
   *     consumes:
   *       - application/json
   *     requestBody:
   *         required: true
   *         content:
   *           application/x-www-form-urlencoded:
   *             schema:
   *                $ref: '#/components/schemas/User'
   *           application/json:
   *             schema:
   *                $ref: '#/components/schemas/User'
   *         description: The `User` entity to create.
   *     responses:
   *       201:
   *         description: The `User` was created successfully.
   *         schema:
   *           type: object
   *           properties:
   *             status:
   *               type: string
   *               example: success
   *             data:
   *               $ref: '#/components/schemas/User'
   */
routes.post('/register', UserController.register);

  /**
   * @swagger
   * /login:
   *   post:
   *     tags: 
   *        - User
   *     summary: this should connect user
   *     description: Connect `User`.
   *     produces:
   *       - application/json
   *     consumes:
   *       - application/json
   *     requestBody:
   *         required: true
   *         content:
   *           application/x-www-form-urlencoded:
   *             schema:
   *                $ref: '#/components/schemas/User'
   *           application/json:
   *             schema:
   *                $ref: '#/components/schemas/User'
   *         description: The `User` entity to connect.
   *     responses:
   *       200:
   *         description: The `User` was connected successfully.
   *         schema:
   *           type: object
   *           properties:
   *             status:
   *               type: string
   *               example: success
   *             data:
   *               $ref: '#/components/schemas/User'
   *             errors:
   *               description: An empty array (always when success).
   *               type: array
   *               items:
   *                 type: object
   *               example: []
   *       400:
   *         description: Invalid input data.
   *       404:
   *         description: Non-existent `User` or lack of permission to see it.
   */
routes.post('/login', UserController.login);

/**
 * @swagger
 * /logout:
 *    get:
 *      tags:
 *          - User
 *      summary: this should logout user.
 *      description: Logout `User`.
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description: Logout User.
 *      schema:
 *          $ref: '#/components/schemas/Items'
 */
routes.get('/logout', UserController.logout);

export default routes;
