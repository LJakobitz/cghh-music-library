/**
 * This Module contains the Schema for a User-Database, it will save an email-adress as well as a password
 */
module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', {
        title: DataTypes.STRING,
        artist: DataTypes.STRING,
        genre: DataTypes.STRING,
        album: DataTypes.STRING,
        albumImageURL: DataTypes.STRING,
        youtubeID: DataTypes.STRING,
        spotifyID: DataTypes.STRING,
        lyrics: DataTypes.TEXT,
        tab: DataTypes.TEXT
    })
    return Song
}