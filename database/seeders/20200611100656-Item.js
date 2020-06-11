'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Items',
      [
        {
          name: 'item 1',
          status: 'active',
          notes: 'lorem ipsum',
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'item 2',
          status: 'active',
          notes: 'lorem ipsum',
          listId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'item 3',
          status: 'active',
          notes: 'lorem ipsum',
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'item 4',
          status: 'completed',
          notes: 'lorem ipsum',
          listId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Items', null, {}),
};
