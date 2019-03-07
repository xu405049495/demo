'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.addColumn('Users', 'userage', {
       type:Sequelize.TINYINT
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'userage');
  }
};