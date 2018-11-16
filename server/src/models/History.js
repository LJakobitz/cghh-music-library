/**
 * This Module contains the Schema for a Favorites-Database, it will save an User as well as his Favorite songs
 */
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {})

  History.associate = function (models) {
    History.belongsTo(models.User)
    History.belongsTo(models.Song)
  }

  return History
}