'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull:false
      },
      password:{
        type:Sequelize.STRING(32),
        allowNull:false
      }
     /*  createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      } */
    },{
      tableName:'users',
      charset:'utf8mb4',
      collate:'utf8mb4_bin'
    }).then(()=>{
       return queryInterface.addIndex('Users',{
         name:"username",
         unique:true,
         fields:['username']
       })
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};