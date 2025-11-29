const express = require('express');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;
const app = express();
const taskRouter = require('./routes/tasks.routes');

app.use('/task', taskRouter);

app.use((err, res, req, next) => {
    const errStatusCode = err.statusCode || 500;
    res.status(errStatusCode).json({ message: 'Enternal server errors' });
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})