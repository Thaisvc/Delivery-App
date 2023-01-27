const express = require('express');

const RegistryAdmRouter = require('../controller/RegistryAdmController');

const registryAdmRouter = express.Router();

registryAdmRouter.post(
  '/',
  (req, res, next) => new RegistryAdmRouter(req, res, next).registryAdm(),
  );

module.exports = registryAdmRouter;
