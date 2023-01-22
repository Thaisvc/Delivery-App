const crypto = require('crypto');
const { User } = require('../database/models');
const HttpError = require('../utils/HttpError');

class UserService {
  constructor() {
    this.userModel = User;
  }

  async login({ email, password }) {
    const hash = crypto.createHash('md5').update(password).digest('hex');
    const response = await this.userModel.findOne({
      where: { email, password: hash },
    });
    if (!response) throw new HttpError(404, 'User not found');
    return { type: 200, message: response };
  }
}

module.exports = UserService;