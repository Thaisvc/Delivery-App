const express = require('express');

const SalesController = require('../controller/SalesController');

const SalesRouter = express.Router();

SalesRouter.get(
  '/',
  (req, res, next) => new SalesController(req, res, next).getSales(),
);

SalesRouter.get(
  '/:id',
  (req, res, next) => new SalesController(req, res, next).getSaleById(),
);

SalesRouter.post(
  '/',
  (req, res, next) => new SalesController(req, res, next).createSale(),
);

module.exports = SalesRouter;
