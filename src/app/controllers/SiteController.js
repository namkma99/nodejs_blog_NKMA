const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../ulti/mongoose');

class SiteController {
  // // [GET] news
  // index(req, res, next) {
  //   Course.find({})
  //     .then((courses) => {

  //       res.render("home", {
  //           courses: mutipleMongooseToObject(courses) });
  //     })
  //     .catch(next);
  //   // res.render('home');
  // }
  index(req, res) {
    res.render('home');
  }

  //[GET] /news/:slug
  show(req, res) {
    res.send('search');
  }
}

module.exports = new SiteController();
