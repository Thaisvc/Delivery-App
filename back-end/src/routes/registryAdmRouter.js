const express = require('express');

const RegistryController = require('../controller/RegistryController');

const registryAdmRouter = express.Router();

registryAdmRouter.post(
  '/',
  (req, res, next) => new RegistryController(req, res, next).registry(),
  );

module.exports = registryAdmRouter;
