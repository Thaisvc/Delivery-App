'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    await queryInterface.createTable('salesProducts', {
      sale_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        // field: 'sale_id',
        references: {
          model: 'sales',
          key: 'id',
        },
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        // field: 'product_id',
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