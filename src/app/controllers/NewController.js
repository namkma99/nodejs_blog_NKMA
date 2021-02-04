const Course = require('../models/Course');

class NewsController {
  // [GET] news
  index(req, res, next) {
    res.send('HELLO');
  }

  //[GET] /news/:slug
  show(req, res) {
    res.send('NEWS DETAILS');
  }
}

module.exports = new NewsController();
