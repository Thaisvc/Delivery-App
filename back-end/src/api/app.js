const express = require('express');
const cors = require('cors');
const loginRouter = require('../routes/loginRouter');
const registryRouter = require('../routes/registryRouter');
const ErrorHandler = require('../middlewares/ErrorHandler');
const productRouter = require('../routes/productRouter');

const path = (
'/home/vinicius/Turma_22_B/Projetos/Back-end/sd-022-b-project-delivery-app/back-end/src/images');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/images', express.static(path));
app.use('/login', loginRouter);
app.use('/registry', registryRouter);
app.use('/products', productRouter);
app.use(ErrorHandler.handle);

module.exports = app;
