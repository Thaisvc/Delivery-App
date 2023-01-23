const express = require('express');

const RegistryController = require('../controller/RegistryController');

const registryRouter = express.Router();

registryRouter.post(
  '/',
  (req, res, next) => new RegistryController(req, res, next).registry(),
  );

module.exports = registryRouter;
