'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    await queryInterface.createTable('products', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      name: { type: Sequelize.STRING, allowNull: false, unique: true },
      price: { type: Sequelize.FLOAT, allowNull: false },
      urlImage: { type: Sequelize.STRING, allowNull: false, defaultValue: '', field: 'url_image' },
    });
  },

  down: async (queryInterface, _Sequelize) => {

    await queryInterface.dropTable('products');
  }
};