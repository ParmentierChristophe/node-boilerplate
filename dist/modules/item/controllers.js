"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _crud = require("../../utils/crud");

var _models = _interopRequireDefault(require("../../../database/models"));

var _default = (0, _crud.crudControllers)(_models["default"].Item, _models["default"].List);

exports["default"] = _default;