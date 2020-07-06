"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controllers = _interopRequireDefault(require("./controllers"));

var routes = new _express.Router();
routes.get('/item', _controllers["default"].getMany);
routes.post('/item', _controllers["default"].createOne);
routes.get('/item/:id', _controllers["default"].getOne);
routes["delete"]('/item/:id', _controllers["default"].removeOne);
routes.put('/item/:id', _controllers["default"].updateOne);
var _default = routes;
exports["default"] = _default;