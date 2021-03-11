require('dotenv').config();

const express = require('express');
const cors = require('cors');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// POST SETUP
app.use(express.json());

// CORS SETUP
app.use(cors([process.env.FRONT_END_URL, process.env.BACK_END_URL]));

// API CALL LOGGIN
app.use(logger('dev'));


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => res.send("hello :) my api is working"));

// API ROUTE
app.use('/api/expertises', require("./routes/expertises"));

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
