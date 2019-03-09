'use strict';
module.exports = (sequelize, Sequelize) => {
  const contents = sequelize.define('contents', {
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
      allowNull:false,
      references: {
        model: "users",
        key: 'id'
      }
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
  }, {});
  contents.associate = function(models) {
    // associations can be defined here
    contents.belongsTo(models.users,{
      foreignKey: 'user_id'
    });
    contents.hasMany(models.comments, {
      foreignKey: 'content_id'
    });
  };
  return contents;
};