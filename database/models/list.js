'use strict';
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
