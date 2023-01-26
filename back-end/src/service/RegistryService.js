const crypto = require('crypto');

const registrySchema = require('../validations/RegistrySchema');
const { User } = require('../database/models');
const HttpError = require('../utils/HttpError');
const { Op } = require('sequelize');

class RegistryService {
  constructor() {
    this.userModel = User;
  }

  async registry({ name, email, password, role }) {
    const { error } = registrySchema.validate({ name, email, password, role });
    if (error) throw new HttpError(400, error.message);
    const hash = crypto.createHash('md5').update(password).digest('hex');

    const [user, created] = await this.userModel.findOrCreate({
      where: { [Op.or]: [{name}, {email}] },
      defaults: { name, email, password: hash, role },
    });
    
    if (!created) throw new HttpError(409, 'usuário já existente');
    return { type: 201, message: user };
  }
}
module.exports = RegistryService;
