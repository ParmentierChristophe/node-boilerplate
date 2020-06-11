"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controllers = _interopRequireDefault(require("./controllers"));

var routes = new _express.Router();
routes.get('/item', _controllers["default"].getMany); // routes.post('/item', controllers.createOne);
// routes.get('/item/:id', controllers.getOne);
// routes.delete('/item/:id', controllers.removeOne);
// routes.put('/item/:id', controllers.updateOne);

var _default = routes;
exports["default"] = _default;