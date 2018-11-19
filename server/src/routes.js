const authenticationController = require('./controllers/authenticationController')
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')
const songsController = require('./controllers/songsController')
const favoritesController = require('./controllers/favoritesController')
const historiesController = require('./controllers/historiesController')
const isAuthenticated = require('./policies/isAuthenticated')
/**
 * This Module will contain (and export) all the routes for the app
 */
module.exports = (app) => {
    //On hitting the register Endpoint with a POST-Request the ControllerPolicy will be checked and then send to the Controller
    app.post('/register', 
      authenticationControllerPolicy.register,
      authenticationController.register)
    app.post('/login',
      authenticationController.login)

    app.get('/songs', 
      songsController.index)
    app.get('/songs/:songId', 
      songsController.show)
    app.post('/songs', 
      songsController.createSong)
    app.put('/songs/:songId', 
      songsController.editSong)

    app.get('/favorites',
      isAuthenticated,
      favoritesController.index)
    app.post('/favorites',
      isAuthenticated,
      favoritesController.post)
    app.delete('/favorites/:favoriteId',
      isAuthenticated,
      favoritesController.delete)

    app.get('/histories',
      isAuthenticated,
      historiesController.index)
    app.post('/histories',
      isAuthenticated,
      historiesController.post)
}

