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
   return queryInterface.bulkInsert('contents', [   {
    user_id: 1,
    title: 'aaaaa',
    content: '1111111',
    like_count:1,
    
    comment_count: 2,
    createdAt:Sequelize.fn('now'),
    updatedAt:Sequelize.fn('now')
  },
  {
    user_id: 2,
    title: 'bbbbbb',
    content: '22222222',
    like_count:2,
    comment_count: 1,
    createdAt:Sequelize.fn('now'),
    updatedAt:Sequelize.fn('now')
  },
  {
    user_id: 1,
    title: 'ccccccc',
    like_count:3,
    content: '3333333',
    comment_count: 4,
    createdAt:Sequelize.fn('now'),
    updatedAt:Sequelize.fn('now')
  },
  {
    user_id: 2,
    title: 'ddddd',
    content: '444444',
    like_count:4,
    comment_count: 5,
    createdAt:Sequelize.fn('now'),
    updatedAt:Sequelize.fn('now')
  },
  {
    user_id: 1,
    title: 'eeeee',
    content: '5555555',
    comment_count: 8,
    like_count:5,
    createdAt:Sequelize.fn('now'),
    updatedAt:Sequelize.fn('now')

  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('contents', null, {});
  }
};
