'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull:false
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      content:{
        type:Sequelize.STRING(1000),
        allowNull:false
      },
      like_count:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      comment_count:{
        type: Sequelize.INTEGER,
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
      queryInterface.addIndex('contents', {
        fields: ['user_id']
     });
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contents');
  }
};