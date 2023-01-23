const crypto = require('crypto');

const registrySchema = require('../validations/RegistrySchema');
const { User } = require('../database/models');
const HttpError = require('../utils/HttpError');

class RegistryService {
  constructor() {
    this.userModel = User;
  }

  async registry({name, email, password }) {
    const { error } = registrySchema.validate({name, email, password });
    if (error) return { type: 400, message: error.message };
    const hash = crypto.createHash('md5').update(password).digest('hex');
    /* const response = await this.userModel.findOne({
      where: { email, password: hash },
    });
    if (!response) throw new HttpError(404, 'User not found');
    return { type: 200, message: response }; */

    const [user, created] = await this.userModel.findOrCreate({
      where: [{name : 'name'  }, {email : 'email'  }],
      defaults: { name, email, hash }
      
    });
   
    if (!created) throw new HttpError(409, 'usuário já existente');
    return { type: 201, message: user };
   
  }
}

module.exports = RegistryService;
