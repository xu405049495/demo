'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('comments', [
    {
      content_id: 1,
      user_id: 1,
      content: '评论内容11111111',
      createdAt:Sequelize.fn('now'),
      updatedAt:Sequelize.fn('now')
    },
    {
      content_id: 1,
      user_id: 2,
      content: '评论内容22222',
      createdAt:Sequelize.fn('now'),
      updatedAt:Sequelize.fn('now')
    },
    {
      content_id: 2,
      user_id: 1,
      content: '评论内容33333333',
      createdAt:Sequelize.fn('now'),
      updatedAt:Sequelize.fn('now')
    }
  ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('comments', null, {});
  }
};
