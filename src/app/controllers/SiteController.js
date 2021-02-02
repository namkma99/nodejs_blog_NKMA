class SiteController {

    // [GET] news
    index(req, res) {
        res.render('home');
    }

    //[GET] /news/:slug
    show(req,res) {
        res.send('search')
    }


}


module.exports = new SiteController;