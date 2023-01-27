const UserService = require('../service/UserService');
const { validateToken } = require('../utils/tokenCreate');

class UserController {
  constructor(req, res, next) {
    this.userService = new UserService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async login() {
    try {
      const { email, password } = this.req.body;
      const { type, message } = await this.userService.login({ email, password });
      this.res.status(type).json(message);
    } catch (e) {
      this.next(e);
    }
  }

  async validateLogin() {
    try {
      const { authorization } = this.req.headers;
      const result = validateToken(authorization);
      this.res.status(200).json(result);
    } catch (e) {
      this.next(e);
    }
  }

  async getSellers() {
    try {
      const { type, message } = await this.userService.getSellers();
      this.res.status(type).json(message);
    } catch (e) {
      this.next(e);
    }
  }
}

module.exports = UserController;
