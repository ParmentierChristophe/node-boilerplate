'use strict';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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
 *           format: UUID
 *           description: |
 *             Unique identifier (`UUID`).
 *             Generated automatically during creation.
 *           example: '30e12ec6-a1e8-446a-ad5b-4b47daaf18f1'
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
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      hooks: {
        afterValidate: async (user) => {
          const hashedPassword = await bcrypt.hash(user.password, 12);
          user.password = hashedPassword;
        },
      },
    }
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
