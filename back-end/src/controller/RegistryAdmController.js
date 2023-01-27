const RegistryAdmService = require('../service/RegistryAdm.Service');

class RegistryAdnController {
  constructor(req, res, next) {
    this.registryAdmService = new RegistryAdmService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async registryAdm() {
    try {
      const { name, email, password, role } = this.req.body;
      /* if (role === 'customer' || role === 'seller') {
        */
      const { type, message } = await this.registryAdmService.registryAdm(
        { name, email, password, role },
        );
      return this.res.status(type).json(message);
      /* }
      return this.res.status(401).json({ message: 'Invalid role' }); */
    } catch (e) {
      this.next(e);
    }
  }
}

module.exports = RegistryAdnController;
