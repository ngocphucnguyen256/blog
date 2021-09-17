const moviesRoute= require('./moviesRoute')
const appRoute= require('./appRoute')

function route(app){

    app.use('/movies', moviesRoute);
    app.use('/', appRoute)
  
}



module.exports =route;