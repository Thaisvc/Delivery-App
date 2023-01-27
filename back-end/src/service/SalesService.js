const { Sale, SaleProduct } = require('../database/models');
const HttpError = require('../utils/HttpError');

class SaleService {
  constructor() {
    this.saleModel = Sale;
    this.salesProductsModel = SaleProduct;
  }

  async getSales() {
    const response = await this.saleModel.findAll();

    if (!response) throw new HttpError(404, 'Sellers not found');
    
    return { type: 200, message: response };
  }

  async createSale({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, cartItems,
  }) {
    const response = await this.saleModel.create({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status,
    });
    if (!response) throw new HttpError(400, 'Não foi possível completar a ação');
    console.log(cartItems);

    const salesProducts = cartItems.map(async (item) => this
    .createSaleProduct(response.id, item.id, item.quant));

    await Promise.all(salesProducts);

    return { type: 201, message: response };
  }

  async createSaleProduct(saleId, productId, quantity) {
    const response = await this.salesProductsModel.create({
      saleId,
      productId,
      quantity,
    });
    
    if (!response) throw new HttpError(400, 'Não foi possível completar a ação');

    return { type: 201, message: response };
  }
}
module.exports = SaleService;
