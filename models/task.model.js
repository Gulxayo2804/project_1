const mongoose = require('mongoose');

const taskModel = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Task', taskModel);