module.exports = function(sequelize, DataTypes) {
  const Burger = sequelize.define("burger", {
    name: DataTypes.STRING,
    Eaten: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  });

  return Burger;
}