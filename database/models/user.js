'use strict';
const jwt = require('jsonwebtoken');

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required: [ email, password]
 *       properties:
 *         id:
 *           type: integer
 *           readOnly: true
 *           format: ObjectId
 *           description: |
 *             Unique identifier (`ObjectId`).
 *             Generated automatically during creation.
 *           example: '507f1f77bcf86cd799439011'
 *         email:
 *           type: string
 *           description: An email to user
 *           example: johndoe@mail.com
 *         password:
 *           type: string
 *           description: A password to user
 *           example: password
 *     Users:
 *         type: array
 *         items:
 *            $ref: '#/components/schemas/User'
 */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  User.prototype.generateJWT = function () {
    let today = new Date();
    let exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign(
      {
        id: this.id,
        email: this.email,
        exp: parseInt(exp.getTime() / 1000),
      },
      'secret'
    );
  };
  return User;
};
