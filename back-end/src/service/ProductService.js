const { Product } = require('../database/models');
const HttpError = require('../utils/HttpError');

class ProductService {
  constructor() {
    this.prodModel = Product;
  }

  async getAll() {
    const response = await this.prodModel.findAll();
    if (!response) throw new HttpError(404, 'Products not found');
    return { type: 200, message: response };
  }
}

module.exports = ProductService;