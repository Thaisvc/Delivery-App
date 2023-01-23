const express = require('express');
const loginRouter = require('../routes/loginRouter');
const ErrorHandler = require('../middlewares/ErrorHandler');

const app = express();
app.use(express.json());
app.use('/login', loginRouter);
app.use(ErrorHandler.handle);

module.exports = app;
