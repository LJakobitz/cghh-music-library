/**
 * This Module contains the Schema for a Song-Database, it will save an Meta-Data, Albumcovers and Spotify and YouTube IDs
 *
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