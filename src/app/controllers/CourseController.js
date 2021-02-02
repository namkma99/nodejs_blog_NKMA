const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../ulti/mongoose');

class CourseController {
  // [GET] course
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('courses', {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
    // res.render('home');
  }

  //[GET] /news/:slug
  show(req, res) {
    res.send('NEWS DETAILS');
  }
}

module.exports = new CourseController();
