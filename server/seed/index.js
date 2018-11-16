const {sequelize, Song, User, Favorite, History} = require('../src/models')
const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')
const favorites = require('./favorites.json')
const histories = require('./histories.json')

sequelize.sync({force:true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )

    await Promise.all(
      songs.map(song => {
        Song.create(song)
      })
    )

    await Promise.all(
      favorites.map(favorite => {
        Favorite.create(favorite)
      })
    )

    await Promise.all(
      histories.map(history => {
        History.create(history)
      })
    )
  })
  