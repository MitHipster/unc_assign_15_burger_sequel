/*jslint esversion: 6, browser: true*/
module.exports = (sequelize, DataTypes) => {
  // Set constructor equal to table definition
  const Rating = sequelize.define('Rating', {
    // Define fields, set properties and add validation
    rating_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    }
  }, {
    timestamps: false
  });
  // Associate with another table (or model)
  Rating.associate = (models) => {
    // Ratings can be repeated on several burgers. No cascading delete option is necessary
    Rating.hasMany(models.Burger, {});
  };

  return Rating;
};
