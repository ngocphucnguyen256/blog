class AppController {

    index(req, res){
        res.render('home')
    }
    search(req, res){
        res.render('search')
    }

    slug(req, res){
        res.send("aloooooooooooooooo")
    }
}


module.exports = new AppController;