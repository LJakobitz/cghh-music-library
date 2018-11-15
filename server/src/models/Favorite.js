/**
 * This Module contains the Schema for a Favorites-Database, it will save an User as well as his Favorite songs
 */
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {})

  Favorite.associate = function (models) {
    Favorite.belongsTo(models.User)
    Favorite.belongsTo(models.Song)
  }

  return Favorite
}