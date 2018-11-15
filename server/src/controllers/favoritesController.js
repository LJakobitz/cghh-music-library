const { Favorite } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const {songId, userId} = req.query

      const favorite = await Favorite.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })

      res.send(favorite)
    } catch (error) {
      res.status(500).send({
        error: 'an error has occurred trying to fetch favorites'
      })
    }
  }
}
      