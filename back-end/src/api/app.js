const express = require('express');
const cors = require('cors');
const loginRouter = require('../routes/loginRouter');
const registryRouter = require('../routes/registryRouter');
const registryAdmRouter = require('../routes/registryAdmRouter');
const ErrorHandler = require('../middlewares/ErrorHandler');
const productRouter = require('../routes/productRouter');
const  validatesUser  = require('../middlewares/validatesUser');
const sellerRouter = require('../routes/sellerRouter');
const SalesRouter = require('../routes/salesRouter');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/images', express.static(__dirname.replace('/api', '/images')));
app.use('/login', loginRouter);
app.use('/registry', registryRouter);
app.use('/register',validatesUser, registryAdmRouter);
app.use('/products', productRouter);
app.use('/sellers', sellerRouter);
app.use('/sales', SalesRouter);
app.use(ErrorHandler.handle);

module.exports = app;
