"use strict";
module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define(
    "Form",
    {
      fullName: DataTypes.STRING,
      message: DataTypes.STRING,
      anime: DataTypes.STRING
    },
    {}
  );
  Form.associate = function(models) {
    // associations can be defined here
  };
  return Form;
};
