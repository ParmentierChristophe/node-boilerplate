"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../../config/passport/utils/auth");

var _controllers = _interopRequireDefault(require("./controllers"));

var routes = new _express.Router();
/**
 * @swagger
 * /item:
 *    get:
 *      tags:
 *          - Item
 *      summary: this should list all of items.
 *      description: List all of `Items`.
 *      consumes:
 *        - application/json
 *      security:
 *        - ApiKeyAuth: []
 *      parameters:
 *        - in: query
 *          name: page
 *          type: string
 *          minimum: 1
 *          default: 1
 *          description: Current Page index
 *        - in: query
 *          name: limit
 *          type: string
 *          minimum: 1
 *          default: 10
 *          description: Limit the number of results.
 *        - in: query
 *          name: order_by
 *          type: string
 *          description: Order by field
 *        - in: query
 *          name : order_direction
 *          type: string
 *          description: Direction order
 *          example: asc
 *
 *      responses:
 *        200:
 *          description: Get a list of Items.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Items'
 *      schema:
 *          $ref: '#/components/schemas/Items'
 *          _meta:
 *            type: object
 *          properties:
 *            currentPage:
 *            type: number
 *            example: 0
 *          totalPages:
 *            type: number
 *            example: 1
 */

routes.get('/item', _auth.auth.required, _controllers["default"].getMany);
/**
 * @swagger
 * /item:
 *   post:
 *     tags:
 *        - Item
 *     summary: this should create an item.
 *     description: Create new `Item`.
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     requestBody:
 *         required: true
 *         content:
 *           application/x-www-form-urlencoded:
 *             schema:
 *                $ref: '#/components/schemas/Item'
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Item'
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
 */

routes.post('/item', _controllers["default"].createOne);
/**
 * @swagger
 * /item/{id}:
 *    get:
 *      tags:
 *          - Item
 *      summary: this should list an item by id.
 *      description: List an `Item` by id.
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

routes.get('/item/:id', _controllers["default"].getOne);
/**
 * @swagger
 * /item/{id}:
 *   delete:
 *     summary: this should delete an item by id.
 *     description: Deletes an existing `Item` by id.
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         format: ObjectId
 *         description: ID of the item to delete
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: The `Item` deleted successfully.
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *               example: success
 *             data:
 *               $ref: '#/components/schemas/Item'
 *             errors:
 *               type: array
 *               items:
 *                 type: object
 *               description: An empty array (always when success).
 *               example: []
 *       404:
 *         description: Non-existent `Item` or lack of permission to see it.
 */

routes["delete"]('/item/:id', _controllers["default"].removeOne);
/**
 * @swagger
 * /item/{id}:
 *   put:
 *     tags:
 *        - Item
 *     summary: this should update an item by id.
 *     description: Update `Item` by id.
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         format: ObjectId
 *         description: ID of Item to be retrieved
 *     requestBody:
 *         required: true
 *         content:
 *           application/x-www-form-urlencoded:
 *             schema:
 *                $ref: '#/components/schemas/Item'
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Item'
 *         description: The `Item` entity to update.
 *     responses:
 *       200:
 *         description: The `Item` was updated successfully.
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
 */

routes.put('/item/:id', _controllers["default"].updateOne);
var _default = routes;
exports["default"] = _default;