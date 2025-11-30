const service = require('../services/task.service');

exports.getAll = async (req, res, next) => {
    try {
        const tasks = await service.getAllTasks();
        res.status(200).json({ message: "Success", tasks })
    } catch (error) {
        next(error)
    }
}

exports.getOne = async (req, res, next) => {
    try {
        const task = await service.getOneTask(req.params.id);
        res.status(200).json({ message: "Success", task })
    } catch (error) {
        next(error)
    }
}

exports.createOne = async (req, res, next) => {
    try {
        const title = req.body.title;

        if (!title) return res.status(400).json({ message: 'Title is required' });
        const newTask = await service.createTask(title);
        res.status(201).json({ message: 'Success' }, newTask)
    } catch (error) {
        next(error)
    }
}

exports.updateOne = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updated = await service.updateTask(id, req.body);
        if (!updated) {
            const err = new Error('The task didnt found');
            err.statusCode = 404;
            throw err;
        }
        res.json(updated)
    } catch (error) {
        next(error)
    }
}

exports.deletOne = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deleted = await service.deleteTAsk(id);

        if (!deleted) return res.status(404).json({ message: "Not found" });
        res.json({ message: 'Deleted' })
    } catch (error) {
        next(error);
    }
}