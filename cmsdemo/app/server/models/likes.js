'use strict';
module.exports = (sequelize, DataTypes) => {
  const Likes = sequelize.define('Likes', {
    user_id: DataTypes.STRING
  }, {});
  Likes.associate = function(models) {
    // associations can be defined here
  };
  return Likes;
};