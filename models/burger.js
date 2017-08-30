/*jslint esversion: 6, browser: true*/
module.exports = (sequelize, DataTypes) => {
  // Set constructor equal to table definition
  const Burger = sequelize.define('Burger', {
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
    burger_desc: {
      type: DataTypes.STRING(255),
      validate: {
        len: [0, 255]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: true
  });
  // Associate with another table (or model)
  Burger.associate = models => {
    // A burger can be created without a rating, but added ratings must exist in the ratings table
    Burger.belongsTo(models.Rating, {
      foreignKey: {
        allowNull: true,
        defaultValue: 6 // Unrated Id
      }
    });
  };

  return Burger;
};
