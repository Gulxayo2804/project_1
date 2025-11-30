const express = require('express');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;
const app = express();
const taskRouter = require('./routes/tasks.routes');
const mongoose = require('mongoose');

app.use(express.json());

app.use('/task', taskRouter);

app.use((err, res, req, next) => {
    const errStatusCode = err.statusCode || 500;
    res.status(errStatusCode).json({ message: 'Enternal server errors' });
})

mongoose.connect('mongodb://localhost:27017/taskdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log('Mongodb running') })
    .catch((err) => { console.log(err) });

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})