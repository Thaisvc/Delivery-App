const express = require('express');

const SalesController = require('../controller/SalesController');

const SalesRouter = express.Router();

SalesRouter.get(
  '/',
  (req, res, next) => new SalesController(req, res, next).getSales(),
);

SalesRouter.post(
  '/',
  (req, res, next) => new SalesController(req, res, next).createSale(),
);

module.exports = SalesRouter;
