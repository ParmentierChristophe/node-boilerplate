'use strict';
/**
 * @openapi
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         status:
 *           type: string
 *         notes:
 *           type: string
 *         listId:
 *           type: integer
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
