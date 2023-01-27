'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('sales', [
      {
        user_id: 3,
        seller_id: 1,
        total_price: 1011,
        delivery_address: "Um teste",
        delivery_number: 404,
        status: "Pendente",
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('sales', null, {});
  }
};
