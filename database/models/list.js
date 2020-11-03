'use strict';

/**
 * @openapi
 * components:
 *   schemas:
 *     List:
 *       type: object
 *       required: [name, description]
 *       properties:
 *         id:
 *           type: integer
 *           readOnly: true
 *           format: ObjectId
 *           description: |
 *             Unique identifier (`ObjectId`).
 *             Generated automatically during creation.
 *           example: '507f1f77bcf86cd799439011'
 *         name:
 *           type: string
 *           description: A name to list
 *           example: Achievement
 *         description:
 *           type: string
 *           description: A Description to list
 *           example: His biggest achievement so far
 *     Lists:
 *         type: array
 *         items:
 *            $ref: '#/components/schemas/List'
 */
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define(
    'List',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  List.associate = function (models) {
    // associations can be defined here
    List.hasMany(models.Item, {
      foreignKey: 'listId',
      onDelete: 'CASCADE',
    });
  };
  return List;
};
