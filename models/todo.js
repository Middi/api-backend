const mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateStart: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    dateEnd: {
        type: String,
        required: true
    },
    timeStart: {
        type: String,
        required: true
    },
    timeEnd: {
        type: String,
        required: true
    },
    shiftType: {
        type: String,
        required: true
    },
    epoch: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;