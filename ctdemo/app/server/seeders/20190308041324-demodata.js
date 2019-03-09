'use strict';
const md5=require("md5");
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
   return queryInterface.bulkInsert('users', [ {
    username: 'Kimoo',
    password: md5('123456'),
    createdAt:Sequelize.fn('now'),
    updatedAt:Sequelize.fn('now')
  },
  {
    username: 'Reci',
    password: md5('123321'),
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
   return queryInterface.bulkDelete('users', null, {});
  }
};
