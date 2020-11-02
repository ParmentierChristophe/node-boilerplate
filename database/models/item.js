'use strict';
/**
 * @openapi
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       required: [name, status, notes, listId]
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
 *           description: A name to item
 *           example: Compliment
 *         status:
 *           type: string
 *           enum: ['active', 'completed']
 *         notes:
 *           type: string
 *           description: A note to item
 *           example: You're amazing
 *         listId:
 *           type: integer
 *           example: 1
 *     Items:
 *         type: array
 *         items:
 *            $ref: '#/components/schemas/Item'
 */

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    'Item',
    {
      name: DataTypes.STRING,
      status: DataTypes.ENUM('active', 'completed'),
      notes: DataTypes.STRING,
      listId: DataTypes.INTEGER,
    },
    {}
  );
  Item.associate = function (models) {
    // associations can be defined here
    Item.belongsTo(models.List, {
      foreignKey: 'listId',
    });
  };
  return Item;
};
