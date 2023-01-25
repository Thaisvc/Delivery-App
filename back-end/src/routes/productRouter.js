const express = require('express');

const ProductController = require('../controller/ProductController');

const productRouter = express.Router();

productRouter.get(
  '/',
  (req, res, next) => new ProductController(req, res, next).getAll(),
  );

module.exports = productRouter;
