const express = require('express'),
router = express.Router();

let db = require('../models');

router.get('/', (req, res) => {
    var date = new Date();
    var month = date.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = monthNames[month];

    db.Todo.find({month: monthName}).sort({epoch: 1})
    .then(todos => res.json(todos))
    .catch(err => res.send(err))
});

router.post('/', (req, res) => {
    var myDate = new Date(req.body.dateStart); // Your timezone!
    var myEpoch = myDate.getTime()/1000.0;

    var date = new Date(req.body.dateStart);
    var month = date.getMonth();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = monthNames[month];

    db.Todo.create({
        name: req.body.name,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        timeStart: req.body.timeStart,
        timeEnd: req.body.timeEnd,
        location: req.body.location,
        shiftType: req.body.shiftType,
        epoch: myEpoch,
        month: monthName
    })
    .then(newTodo => {
        res.json(newTodo)
    })
    .catch(err => res.send(err))
});

router.get('/:todoId', (req, res) => {
    db.Todo.findById(req.params.todoId)
    .then(foundTodo => res.json(foundTodo))
    .catch(err => res.send(err))
});

router.put('/:todoId', (req, res) => {
    db.Todo.findOneAndUpdate({
        _id: req.params.todoId
    }, req.body, {new: true})
    .then(todo => res.json(todo))
    .catch(err => res.send(err))
});

router.delete('/:todoId', (req, res) => {
    db.Todo.remove({_id: req.params.todoId})
    .then(() => res.json({message: 'deleted'}))
    .catch(err => res.send(err))
});

module.exports = router;
