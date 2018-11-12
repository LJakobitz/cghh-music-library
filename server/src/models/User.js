/**
 * This Module contains the Schema for a User-Database, it will save an email-adress as well as a password
 */
module.exports = (sequelize, DataTypes) => 
    sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })