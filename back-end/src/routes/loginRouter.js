const express = require('express');

const UserController = require('../controller/UserController');

const loginRouter = express.Router();

loginRouter.post(
  '/',
  (req, res, next) => new UserController(req, res, next).login(),
  );

  loginRouter.patch(
    '/',
    (req, res, next) => new UserController(req, res, next).validateLogin(),
    );

module.exports = loginRouter;