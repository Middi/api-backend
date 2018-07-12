const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://Middi:Thomas123!@ds131711.mlab.com:31711/calendar');

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');