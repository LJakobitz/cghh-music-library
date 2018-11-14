const authenticationController = require('./controllers/authenticationController')
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')
const songsController = require('./controllers/songsController')
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

    app.post('/songs', 
      songsController.createSong)
}

