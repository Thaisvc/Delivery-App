const express = require('express');
const validateStatus = require('../middlewares/validateStatus');

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

SalesRouter.patch(
  '/',
  (req, res, next) => validateStatus(req, res, next),
  (req, res, next) => new SalesController(req, res, next).updateStatus(),
);

module.exports = SalesRouter;
