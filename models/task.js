const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title: {
        type: "string",
        required: true
    },
    description: {
        type: "string",
        required: true
    },
    dueDate: {
        type: "string",
        required: true
    },
    priority: {
        type: "string",
        required: true
    },
    status: {
        type: "string",
        required: true
    },
    creator: {
        type: "string",
        required: true
    }
})

module.exports = mongoose.model('Task', taskSchema)
