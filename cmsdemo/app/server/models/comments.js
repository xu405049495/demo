'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    content_id: DataTypes.STRING
  }, {});
  Comments.associate = function(models) {
    // associations can be defined here
  };
  return Comments;
};