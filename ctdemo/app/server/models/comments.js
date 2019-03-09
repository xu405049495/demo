'use strict';
module.exports = (sequelize, Sequelize) => {
  const comments = sequelize.define('comments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    content_id: {
      type: Sequelize.STRING,
      allowNull:false,
      references: {
        model: "contents",
        key: 'id'
      }
    },
    user_id:{
       type:Sequelize.INTEGER,
       allowNull:false,
       references: {
        model: "users",
        key: 'id'
      }
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
  }, {});
  comments.associate = function(models) {
    // associations can be defined here
   /*  comments.belongsTo(models.contents, {
      foreignKey: 'content_id'
    }); */
    comments.belongsTo(models.contents,{
      as: 'contentid',
      foreignKey: 'content_id'
    });

    comments.belongsTo(models.users, {
      foreignKey: 'user_id'
    });

  };
  return comments;
};