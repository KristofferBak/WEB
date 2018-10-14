require('dotenv').load();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport'); //skal gøres inden models definitionerne
require('./app_server/models/db');
require('./app_server/config/passport'); //gøres efter models definitionerne

const indexRouter = require('./app_server/routes/index');
//const routesApi = require('./app_api/routes/index'); 
const usersRouter = require('./app_server/routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //!!!!public

app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/api', routesApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
    } 

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
