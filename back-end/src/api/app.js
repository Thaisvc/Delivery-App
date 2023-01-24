const express = require('express');
const cors = require('cors');
const loginRouter = require('../routes/loginRouter');
const registryRouter = require('../routes/registryRouter');
const ErrorHandler = require('../middlewares/ErrorHandler');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/login', loginRouter);
app.use('/registry', registryRouter);
app.use(ErrorHandler.handle);

module.exports = app;
