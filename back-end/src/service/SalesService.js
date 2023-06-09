const { Sale, SaleProduct, Product } = require('../database/models');
const HttpError = require('../utils/HttpError');

const ERROR_FAILED = 'Não foi possível completar a ação';

class SaleService {
  constructor() {
    this.saleModel = Sale;
    this.salesProductsModel = SaleProduct;
    this.productModel = Product;
  }

  async getSales() {
    const response = await this.saleModel.findAll();

    if (!response) throw new HttpError(404, 'Sales not found');
    
    return { type: 200, message: response };
  }

  async getSaleById(id) {
    const response = await this.saleModel.findOne({
      include: [
        { model: this.productModel, as: 'sales', through: { attributes: ['quantity'] } },
      ],
      where: { id } });

    if (!response) throw new HttpError(404, 'Sale not found');
    
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
    if (!response) throw new HttpError(400, ERROR_FAILED);

    const salesProducts = cartItems.map(async (item) => this
    .createSaleProduct(response.id, item.id, item.quant));
    const promTreated = await Promise.all(salesProducts);
    console.log(promTreated);

    return { type: 201, message: response };
  }

  async createSaleProduct(saleId, productId, quantity) {
    const response = await this.salesProductsModel.create({
      saleId,
      productId,
      quantity,
    });
    
    if (!response) throw new HttpError(400, ERROR_FAILED);

    return { type: 201, message: response };
  }

  async updateStatus(status, id) {
    const sale = await this.getSaleById(id);

    if (!sale) throw new HttpError(404, 'Pedido não encontrado');

    const response = await this.saleModel.update(
      { status },
      { where: { id } },
    );

    if (!response) throw new HttpError(400, ERROR_FAILED);

    return { type: 201, message: response };
  }
}
module.exports = SaleService;
