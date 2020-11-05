'use strict';

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
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};