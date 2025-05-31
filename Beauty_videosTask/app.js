
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const BeautyRouter = require('./routes/BeautyRouter/BeautyRouter.router');

const app = express();

app.use(logger('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); // To enable CORS for frontend/backend integration


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', BeautyRouter); 


app.get('/health', (req, res) => {
  res.status(200).send('Server is running');
});


app.use(function (req, res, next) {
  next(createError(404));
});


app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: err.message || 'Internal Server Error',
  });
});

module.exports = app;
