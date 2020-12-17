"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _passport = _interopRequireDefault(require("passport"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _localStrategy = require("./passport/strategies/localStrategy");

(0, _localStrategy.localLogin)(_passport["default"]);

var _default = function _default(app) {
  app.disable('x-powered-by');
  app.use((0, _cors["default"])());
  app.use(_bodyParser["default"].json());
  app.use(_bodyParser["default"].urlencoded({
    extended: false
  }));
  app.use((0, _morgan["default"])('dev'));
  app.use(_passport["default"].initialize());
  app.use(_passport["default"].session());
  app.use((0, _expressSession["default"])({
    resave: true,
    saveUninitialized: true,
    secret: 'secret',
    cookie: {
      maxAge: 1209600000
    }
  }));
};

exports["default"] = _default;