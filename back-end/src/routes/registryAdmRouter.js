const express = require('express');

const RegistryAdmRouter = require('../controller/RegistryController');

const registryAdmRouter = express.Router();

registryAdmRouter.post(
  '/',
  (req, res, next) => new RegistryAdmRouter(req, res, next).registry(),
  );

module.exports = registryAdmRouter;
