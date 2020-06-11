'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Lists',
      [
        {
          name: 'list 1',
          description: 'lorem ipsum',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'list 2',
          description: 'lorem ipsum',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Lists', null, {}),
};
