const RegistryService = require('../service/RegistryService');

class RegistryController {
  constructor(req, res, next) {
    this.registryService = new RegistryService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async registry() {
    try {
      const { name, email, password, role } = this.req.body;
      const { type, message } = await this.registryService.
      registry(
        { name, email, password, role });
      this.res.status(type).json(message);
    } catch (e) {
      this.next(e);
    }
  }
}

module.exports = RegistryController;
