const SaleService = require('../service/SalesService');
const { validateToken } = require('../utils/tokenCreate');

class SalesController {
  constructor(req, res, next) {
    this.saleService = new SaleService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async getSales() {
    try {
      const { type, message } = await this.saleService.getSales();
      this.res.status(type).json(message);
    } catch (e) {
      this.next(e);
    }
  }

  async getSaleById() {
    try {
      const { id } = this.req.params;
      const { type, message } = await this.saleService.getSaleById(id);
      this.res.status(type).json(message);
    } catch (e) {
      this.next(e);
    }
  }

  async createSale() {
    try {
      const {
        userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, cartItems,
      } = this.req.body;

      const { authorization } = this.req.headers;

      validateToken(authorization);

      const { type, message } = await this.saleService.createSale(
        { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, cartItems },
      );

      this.res.status(type).json(message);
    } catch (e) {
      this.next(e);
    }
  }

  async updateStatus() {
    try {
      const { status, id } = this.req.body;
      console.log(status);
      const { type, message } = await this.saleService.updateStatus(status, id);
      this.res.status(type).json(message);
    } catch (e) {
      this.next(e);
    }
  }
}

module.exports = SalesController;
