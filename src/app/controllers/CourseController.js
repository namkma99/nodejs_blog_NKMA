const Course = require('../models/Course');
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require('../../ulti/mongoose');

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
  show(req, res, next) {
    // console.log(req.params.slug)
    Course.findOne({ slug: req.params.slug })
      .then((courses) => {
        res.render('courses/show', {
          courses: mongooseToObject(courses),
        });
      })
      .catch(next);
  }

  create(req, res, next) {
    res.render('courses/create');
  }

  //[POST] courses/store
  store(req, res, next) {
    try {
      const formData = req.body;
      formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
      const course = new Course(formData);
      course.save().then((r) => res.redirect('/courses'));
    } catch (error) {
      console.log(error);
      res.status(404).send('Sorry, we cannot find that!');
      res.status(500).send({ error: 'something blew up' });
    }
  }

  //[GET] /me/:id/edit
  edit(req, res, next) {
    Course.findById({ _id: req.params.id }).then((courses) => {
      res.render('courses/edit', {
        courses: mongooseToObject(courses),
      });
    });
  }

  // [POST] //me/course/store
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/course/store'))
      .catch(next);
  }
  delete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new CourseController();
