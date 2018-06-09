const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/api-test');

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');