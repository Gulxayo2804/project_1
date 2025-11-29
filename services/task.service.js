const tasks = require('../data');

function getAllTasks() {
    return tasks;
}

function getOneTask(id) {
    return tasks.find(t => t._id === id);
}

function createTask(title) {
    const newTask = {
        _id: Date.now(),
        title,
        completed: false
    }
    tasks.push(newTask);
    return newTask;
}

function updateTask(id, data) {
    const task = tasks.find(t => t._id === data.id)
    if (!task) return null;

    task.title = data.task ?? task.title;
    task.completed = data.completed ?? task.completed;
    return task;
}

function deleteTAsk(id) {
    const index = tasks.findIndex(t => t.id === id)
    if (index === -1) return false;

    tasks.splice(index, 1);
    return true;
}

module.exports = {
    getAllTasks,
    getOneTask,
    createTask,
    updateTask,
    deleteTAsk
}