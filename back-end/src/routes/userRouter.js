const express = require('express');

const UserController = require('../controller/UserController');

const userRouter = express.Router();

userRouter.get(
  '/',
  (req, res, next) => new UserController(req, res, next).getUsers(),
);

userRouter.delete(
  '/',
  (req, res, next) => new UserController(req, res, next).deleteUser(),
);

module.exports = userRouter;
