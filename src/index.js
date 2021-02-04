const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const routes = require('./routes');
const db = require('./config/db');
var methodOverride = require('method-override');

//Connect to db
db.connect();

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
// HTTP logger
app.use(morgan('combined'));

//middlewave-method-override
app.use(methodOverride('_method'));

// template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log('PATH:', path.join(__dirname, 'resources/views'));

//routes init

routes(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
