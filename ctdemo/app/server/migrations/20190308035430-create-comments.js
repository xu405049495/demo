'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content_id: {
        type: Sequelize.STRING,
        allowNull:false
      },
      user_id:{
         type:Sequelize.INTEGER,
         allowNull:false
      },
      content:{
        type: Sequelize.STRING(1000),
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW()
      }
    }).then(()=>{
     return queryInterface.addIndex('comments', {
        name: 'content_id',
        fields: ['content_id']
      });
    }).then(()=>{
      queryInterface.addIndex('comments', {
        name: 'user_id',
        fields: ['user_id']
      });
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comments');
  }
};