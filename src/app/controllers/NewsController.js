class NewsController {

    index(req, res){
        res.render('news')
    }

    slug(req, res){
        res.send("slug")
    }
}


module.exports = new NewsController;