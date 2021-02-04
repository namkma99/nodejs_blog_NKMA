const meRouter = require('./me');
const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {
  app.use('/news', newRouter);
  app.use('/me', meRouter);
  app.use('/courses', courseRouter);
  app.use('/', siteRouter);
}

module.exports = route;
