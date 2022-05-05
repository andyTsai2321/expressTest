var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
var logger = require('morgan');
const cors = require('cors')
// router
var postsRouter = require('./routes/posts');
var usersRouter = require('./routes/users');


var app = express();
require('./connections');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/api/posts', postsRouter);
app.use('/users', usersRouter);

module.exports = app;
