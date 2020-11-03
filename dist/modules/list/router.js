"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

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

routes.get('/list', _controllers["default"].getMany);
routes.post('/list', _controllers["default"].createOne);
routes.get('/list/:id', _controllers["default"].getOne);
routes["delete"]('/list/:id', _controllers["default"].removeOne);
routes.put('/list/:id', _controllers["default"].updateOne);
var _default = routes;
exports["default"] = _default;