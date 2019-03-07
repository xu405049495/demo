'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contents = sequelize.define('Contents', {
    title: DataTypes.STRING
  }, {});
  Contents.associate = function(models) {
    // associations can be defined here
  };
  return Contents;
};