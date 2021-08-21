const newsRoute= require('./newsRoute')
const appRoute= require('./appRoute')

function route(app){

    app.use('/news', newsRoute);
    app.use('/', appRoute)
  
}



module.exports =route;