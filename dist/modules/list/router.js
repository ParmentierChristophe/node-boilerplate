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
 * /list:
 *    get:
 *      tags:
 *          - List
 *      summary: this should list all of lists.
 *      description: List all of `Lists`.
 *      consumes:
 *        - application/json
 *      security:
 *        - ApiKeyAuth: []
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

routes.get('/list', _auth.auth.required, _controllers["default"].getMany);
/**
 * @swagger
 * /list:
 *   post:
 *     tags:
 *        - List
 *     summary: this should create a list.
 *     description: Create new `List`.
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *         required: true
 *         content:
 *           application/x-www-form-urlencoded:
 *             schema:
 *                $ref: '#/components/schemas/List'
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/List'
 *         description: The `List` entity to create.
 *     responses:
 *       200:
 *         description: The `List` was created successfully.
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *               example: success
 *             data:
 *               $ref: '#/components/schemas/List'
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

routes.post('/list', _auth.auth.required, _controllers["default"].createOne);
routes.get('/list/:id', _controllers["default"].getOne);
routes["delete"]('/list/:id', _controllers["default"].removeOne);
routes.put('/list/:id', _controllers["default"].updateOne);
var _default = routes;
exports["default"] = _default;