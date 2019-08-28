var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var moment = require("moment-timezone");

var indexRouter = require('./routes/index');
var attractionsRouter = require('./routes/attractions');
var jobsRouter = require('./routes/jobs');
var storyRouter = require('./routes/story');
var contactRouter = require('./routes/contact');
var fruitWoodRouter = require('./routes/fruit-wood');
var partiesRouter = require('./routes/parties');
var schoolsRouter = require('./routes/schools');
var wholesaleRouter = require('./routes/wholesale');
var usersRouter = require('./routes/users');
var compileSass = require('express-compile-sass');
var root = process.cwd();
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// sass engine setup
app.use(compileSass({
  root: root,
  sourceMap: true, // Includes Base64 encoded source maps in output css
  sourceComments: true, // Includes source comments in output css
  watchFiles: true, // Watches sass files and updates mtime on main files for each change
  logToConsole: false // If true, will log to console.error on errors
}));

app.locals.moment = moment;
app.locals.messageIsCurrent = function(date){ return ((moment(date.start) <= moment()) && (moment(date.end) >= moment()))}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('node_modules'));

// app.use('/favicon.ico', express.static('images/favicon.ico'));

app.use('/', indexRouter);
app.use('/attractions', attractionsRouter);
app.use('/jobs', jobsRouter);
app.use('/story', storyRouter);
app.use('/contact', contactRouter);
app.use('/fruit-wood', fruitWoodRouter);
app.use('/parties', partiesRouter);
app.use('/schools', schoolsRouter);
app.use('/wholesale', wholesaleRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
