const { Favorite, Song } = require('../models')
const _ = require('lodash')
module.exports = {
  async index(req, res) {
    try {
      const {songId, userId} = req.query
      where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      const favorites = await Favorite.findAll({
        where: where,
        include: [
          {
            model: Song
          }
        ]
      }).map(favorite => favorite.toJSON())
        .map(favorite => _.extend(
          {},
          favorite.Song,
          favorite
          ))
      res.send(favorites)
    } catch (error) {
      res.status(500).send({
        error: 'an error has occurred trying to fetch favorite'
      })
    }
  },
  async post(req, res) {
    try {
      const {songId, userId} = req.body.params
      const favorite = await Favorite.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (favorite) {
        return res.status(400).send({
          error: 'song already favorited'
        })
      }
      const newFav = await Favorite.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newFav)
    } catch (error) {
      res.status(500).send({
        error: 'an error has occurred trying to create favorite'
      })
    }
  },
  async delete(req, res) {
    try {
      const {favoriteId} = req.params
      const favorite = await Favorite.findById(favoriteId)
      await favorite.destroy()
      res.send(favorite)
    } catch (error) {
      res.status(500).send({
        error: 'an error has occurred trying to delete favorite'
      })
    }
  }

}
      