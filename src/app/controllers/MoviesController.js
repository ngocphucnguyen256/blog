const movies = require('../models/Movies')
const {multipleMongooseToObject}= require('../../util/mongoose')
const {mongooseToObject}= require('../../util/mongoose')

class MoviesController {

    index(req, res, next){
     
        movies.find({}).limit(21)
            .then(movies =>{
                res.render('movies',{ movies: multipleMongooseToObject(movies) })
            })
            .catch(error => next(error))
    }
    slug(req, res, next){
        movies.findOne({ slug: req.params.slug})
        .then( movie=>{
            // console.log(movie);
            res.render('movieInfo', {movie:mongooseToObject(movie)})
         } )
        .catch(error => next(error))
    }
}


module.exports = new MoviesController;