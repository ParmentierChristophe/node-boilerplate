"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crudControllers = exports.updateOne = exports.removeOne = exports.createOne = exports.getOne = exports.getMany = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _pagination = require("./pagination");

var _moment = _interopRequireDefault(require("moment"));

var _sequelize = require("sequelize");

var getMany = function getMany(model) {
  return /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$query, q, page, limit, order_by, order_direction, search, order, transform, datas;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              // get the query params
              _req$query = req.query, q = _req$query.q, page = _req$query.page, limit = _req$query.limit, order_by = _req$query.order_by, order_direction = _req$query.order_direction;
              search = {};
              order = []; // add the search term to the search object

              if (q) {
                search = {
                  where: {
                    name: (0, _defineProperty2["default"])({}, _sequelize.Op.like, "%".concat(q, "%"))
                  }
                };
              } // add the order parameters to the order


              if (order_by && order_direction) {
                order.push([order_by, order_direction]);
              } // transform function that can be passed to the  paginate method


              transform = function transform(records) {
                return records.map(function (record) {
                  return {
                    id: record.id,
                    name: record.name,
                    date: (0, _moment["default"])(record.createdAt).format('D-M-Y H:mm A')
                  };
                });
              }; // paginate method that takes in the model, page, limit, search object, order and transform


              _context.next = 9;
              return (0, _pagination.paginate)(model, page, limit, search, order, transform);

            case 9:
              datas = _context.sent;
              return _context.abrupt("return", res.status(200).json({
                success: true,
                message: "Fetched ".concat(model.name),
                data: datas
              }));

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              console.log("Failed to fetch ".concat(model.name), _context.t0);
              return _context.abrupt("return", res.status(500).send({
                success: false,
                message: "Failed to fetch ".concat(model.name)
              }));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.getMany = getMany;

var getOne = function getOne(model) {
  var relationModel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var docId, doc;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              docId = req.params.id;

              if (!relationModel) {
                _context2.next = 8;
                break;
              }

              _context2.next = 5;
              return model.findOne({
                where: {
                  id: docId
                },
                include: {
                  model: relationModel
                }
              });

            case 5:
              doc = _context2.sent;
              _context2.next = 11;
              break;

            case 8:
              _context2.next = 10;
              return model.findOne({
                where: {
                  id: docId
                }
              });

            case 10:
              doc = _context2.sent;

            case 11:
              if (doc) {
                _context2.next = 13;
                break;
              }

              return _context2.abrupt("return", res.status(404).json(errorHandling("".concat(model, " with the specified ID does not exists"))));

            case 13:
              return _context2.abrupt("return", res.status(200).json({
                data: doc
              }));

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              res.status(400).end();

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 16]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

exports.getOne = getOne;

var createOne = function createOne(model) {
  return /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var doc;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return model.create(req.body);

            case 3:
              doc = _context3.sent;
              return _context3.abrupt("return", res.status(201).json({
                data: doc
              }));

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              res.status(400).end();

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};

exports.createOne = createOne;

var removeOne = function removeOne(model) {
  return /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var docId, deleted;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              docId = req.params.id;
              _context4.next = 4;
              return model.destroy({
                where: {
                  id: docId
                }
              });

            case 4:
              deleted = _context4.sent;

              if (!deleted) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt("return", res.status(204).send("".concat(model, " deleted")));

            case 7:
              throw new Error("".concat(model, " not found"));

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);
              res.status(400).end();

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 10]]);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }();
};

exports.removeOne = removeOne;

var updateOne = function updateOne(model) {
  return /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var docId, _yield$model$update, _yield$model$update2, updated, updatedDoc;

      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              docId = req.params.id;
              _context5.next = 4;
              return model.update(req.body, {
                where: {
                  id: docId
                }
              });

            case 4:
              _yield$model$update = _context5.sent;
              _yield$model$update2 = (0, _slicedToArray2["default"])(_yield$model$update, 1);
              updated = _yield$model$update2[0];

              if (!updated) {
                _context5.next = 12;
                break;
              }

              _context5.next = 10;
              return model.findOne({
                where: {
                  id: docId
                }
              });

            case 10:
              updatedDoc = _context5.sent;
              return _context5.abrupt("return", res.status(200).json({
                data: updatedDoc
              }));

            case 12:
              throw new Error("".concat(model, " not found"));

            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](0);
              res.status(400).end();

            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 15]]);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }();
};

exports.updateOne = updateOne;

var crudControllers = function crudControllers(model) {
  var relationModel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    removeOne: removeOne(model),
    updateOne: updateOne(model),
    getMany: getMany(model),
    getOne: getOne(model, relationModel),
    createOne: createOne(model)
  };
};

exports.crudControllers = crudControllers;