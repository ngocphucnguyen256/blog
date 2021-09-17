const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movies = new Schema({
        title: {type:String},
        poster: {type:String},
        plot: {type:String},
        year: {type:String},

});


module.exports =mongoose.model('Movies', Movies);