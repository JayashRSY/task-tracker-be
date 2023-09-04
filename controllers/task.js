const Task = require('../models/task');

exports.getTasks = (req, res, next) => {
    Task.find({ creator: req.userData.email }).then(task => {
        if (task) {
            res.status(200).json(task)
        } else {
            res.status(404).json({
                message: 'Task not found'
            })
        }
    })
}
exports.getTaskById = (req, res, next) => {
    Task.findById(req.params.id).then(task => {
        if (task) {
            res.status(200).json(task)
        } else {
            res.status(404).json({
                message: 'Task not found'
            })
        }
    })
}
exports.createTask = (req, res, next) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
        priority: req.body.priority,
        status: req.body.status,
        creator: req.userData.email
    })
    task.save().then((createdTask) => {
        res.status(201).json({
            message: 'Task added successfully',
            task: {
                ...createdTask,
                id: createdTask._id,
            }
        })
    })
}

exports.deleteTask = (req, res, next) => {
    Task.deleteOne({ _id: req.params.id, creator: req.userData.email })
        .then((result) => {
            if (result.deletedCount > 0) {
                res.status(200).json({ message: 'Task Deleted successfully' })
            } else {
                res.status(200).json({ message: 'Not Authorized' })
            }
        })
}

exports.updateTask = (req, res, next) => {
    const task = new Task({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
        priority: req.body.priority,
        status: req.body.status,
        creator: req.userData.email
    })
    Task.updateOne({ _id: req.params.id, creator: req.userData.email }, task)
        .then(result => {
            if (result.matchedCount > 0) {
                res.status(200).json({ message: 'Task updated successfully' })
            } else {
                res.status(200).json({ message: 'Not Authorized' })
            }
        })
}