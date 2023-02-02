const crypto = require('crypto');

const loginSchema = require('../validations/loginSchema');
const { User } = require('../database/models');
const HttpError = require('../utils/HttpError');
const { createToken } = require('../utils/tokenCreate');
const noPassword = require('../utils/noPassword');

class UserService {
  constructor() {
    this.userModel = User;
  }

  async getUsers() {
    const response = await this.userModel.findAll();

    const withoutPassword = noPassword(response);

    if (!response) throw new HttpError(404, 'Users not found');

    return { type: 200, message: withoutPassword };
  }

  async login({ email, password }) {
    const { error } = loginSchema.validate({ email, password });
    if (error) throw new HttpError(400, error.message);
    const hash = crypto.createHash('md5').update(password).digest('hex');
    const response = await this.userModel.findOne({
      where: { email, password: hash },
    });
    if (!response) throw new HttpError(404, 'User not found');
    const token = createToken(response);
    return { type: 200, message: { response, token } };
  }

  async getSellers() {
    const response = await this.userModel.findAll({
      where: { role: 'seller' },
    });

    const withoutPassword = noPassword(response);

    if (!response) throw new HttpError(404, 'Sellers not found');
    return { type: 200, message: withoutPassword };
  }

  async deleteUser(id) {
    const response = await this.userModel.destroy({
      where: { id },
    });

    if (!response) throw new HttpError(404, 'Sellers not found');
    return { type: 200, message: response };
  }
}

module.exports = UserService;
