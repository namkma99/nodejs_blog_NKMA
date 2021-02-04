const Course = require('../models/Course');
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require('../../ulti/mongoose');

class MeController {
  // [GET] /me/courses/store
  storeCourse(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('me/store-course', {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
