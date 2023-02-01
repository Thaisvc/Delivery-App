const crypto = require('crypto');

const { Op } = require('sequelize');
const registrySchema = require('../validations/RegistrySchema');
const { User } = require('../database/models');
const HttpError = require('../utils/HttpError');
const { createToken } = require('../utils/tokenCreate');

class RegistryService {
  constructor() {
    this.userModel = User;
  }

  async registry({ name, email, password, role }) {
    const { error } = registrySchema.validate({ name, email, password, role });
    if (error) throw new HttpError(400, error.message);
    const hash = crypto.createHash('md5').update(password).digest('hex');

    const [user, created] = await this.userModel.findOrCreate({
      where: { [Op.or]: [{ name }, { email }] },
      defaults: { name, email, password: hash, role },
    });
    
    if (!created) throw new HttpError(409, 'usuário já existente');

    const token = createToken(user);

    return { type: 201, message: { name: user.name, email: user.email, role: user.role, token } };
  }
}
module.exports = RegistryService;
