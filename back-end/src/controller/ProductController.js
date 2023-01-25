const ProductService = require('../service/ProductService');

class ProductController {
  constructor(req, res, next) {
    this.prodService = new ProductService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async getAll() {
    try {
      const { type, message } = await this.prodService.getAll();
      this.res.status(type).json(message);
    } catch (e) {
      this.next(e);
    }
  }
}

module.exports = ProductController;