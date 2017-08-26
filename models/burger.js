/*jslint esversion: 6, browser: true*/
module.exports = (sequelize, DataTypes) => {
  // Set constructor equal to table definition
  const Burger = sequelize.define('burger', {
    // Define fields, set properties and add validation
    burger_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    rest_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    description: {
      type: DataTypes.STRING(255),
      validate: {
        len: [0, 255]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    timestamps: true
  });
  return Burger;
};
