'use strict';
module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(32),
      allowNull: false
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
  }, {});
  users.associate = function (models) {
    // associations can be defined here
    users.hasMany(models.contents,{
      foreignKey: 'user_id'
    });
    users.hasMany(models.comments,{
      foreignKey: 'user_id'
    })
  };
  return users;
};