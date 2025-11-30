const Task = require('../models/task.model');

async function getAllTasks() {
    return await Task.find();
}

async function getOneTask(id) {
    return await Task.findById(id);
}

async function createTask(title) {
    const newTask = new Task({ title })
    await newTask.save();
    return newTask;
}

async function updateTask(id, data) {
    const task = await Task.findByIdAndUpdate(id, data);
    return task;
}

async function deleteTAsk(id) {
    const task = await Task.findByIdAndDelete(id)
    return task;
}

module.exports = {
    getAllTasks,
    getOneTask,
    createTask,
    updateTask,
    deleteTAsk
}