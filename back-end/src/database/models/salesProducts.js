module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    productId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
    {
      timestamps: false,
      tableName: 'sales_products',
      underscored: true,
    });
    SaleProduct.associate = (models) => {
      models.Product.belongsToMany(models.Sale, {
        as: 'sales',
        through: SaleProduct,
        foreignKey: 'saleId',
        otherKey: 'productId',
      });
      
      models.Sale.belongsToMany(models.Product, {
        as: 'products',
        through: SaleProduct,
        foreignKey: 'productId',
        otherKey: 'saleId',
      });
    }

  return SaleProduct;
};