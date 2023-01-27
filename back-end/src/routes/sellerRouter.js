const express = require('express');

const UserController = require('../controller/UserController');

const sellerRouter = express.Router();

sellerRouter.get(
  '/',
  (req, res, next) => new UserController(req, res, next).getSellers(),
  );

module.exports = sellerRouter;
