const service = require('../services/task.service');

exports.getAll = (req, res, next) => {
    res.json(service.getAllTasks());
}

exports.getOne = (req, res, next) => {
    const id = Number(req.params.id);
    const task = service.getOneTask(id);

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(service.getOneTask(req.params.id));
}

exports.createOne = (req, res, next) => {
    const title = req.body.title;

    if (!title) return res.status(400).json({ message: 'Title is required' });
    const newTask = service.createTask(title);
    res.status(201).json({ message: 'Success' }, newTask)
}

exports.updateOne = (req, res, next) => {
    const id = Number(req.params.id);
    const updated = service.updateTask(id, req.body);
    res.json(updated)
}

exports.deletOne = (req, res, next) => {
    const id = Number(req.params.id);
    const deleted = service.deleteTAsk(id);

    if (!deleted) returnres.status(404).json({ message: "Not found" });
    res.json({ message: 'Deleted' })
}