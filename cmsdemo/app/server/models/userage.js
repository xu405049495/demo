'use strict';
module.exports = (sequelize, DataTypes) => {
  const userage = sequelize.define('userage', {
    userage: DataTypes.INTEGER
  }, {});
  userage.associate = function(models) {
    // associations can be defined here
  };
  return userage;
};