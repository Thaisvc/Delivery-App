const crypto = require('crypto');

const loginSchema = require('../validations/loginSchema');
const { User } = require('../database/models');
const HttpError = require('../utils/HttpError');
const { createToken } = require('../utils/tokenCreate');

class UserService {
  constructor() {
    this.userModel = User;
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
}

module.exports = UserService;
