const Joi = require('joi');

const RegistrySchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().required(),
});

module.exports = RegistrySchema;
