'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    await queryInterface.createTable('salesProducts', {
      saleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'sale_id',
        references: {
          model: 'sales',
          key: 'id',
        },
      },
      productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'product_id',
        references: {
          model: 'products',
          key: 'id',
        },
      },
      quantity: { type: Sequelize.INTEGER, allowNull: false },
    });
  },

  down: async (queryInterface, _Sequelize) => {

    await queryInterface.dropTable('salesProducts');
  }
};