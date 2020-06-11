"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _middlewares = _interopRequireDefault(require("./config/middlewares"));

var _router = _interopRequireDefault(require("./modules/item/router"));

var _router2 = _interopRequireDefault(require("./modules/list/router"));

var app = (0, _express["default"])();
(0, _middlewares["default"])(app);
app.use('/api', [_router["default"], _router2["default"]]);
app.listen(8081, function () {
  console.log('app listening on port 8081!');
});