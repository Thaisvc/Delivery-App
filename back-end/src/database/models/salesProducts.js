module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    productId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
    {
      timestamps: false,
      tableName: 'salesProducts',
      underscored: true,
    });
    SaleProduct.associate = (models) => {
      models.Sale.belongsToMany(models.Sale, {
        as: 'sales',
        through: SaleProduct,
        foreignKey: 'saleId',
        otherKey: 'productId',
      });
      
      models.Product.belongsToMany(models.Product, {
        as: 'products',
        through: SaleProduct,
        foreignKey: 'productId',
        otherKey: 'saleId',
      });
    }

  return SaleProduct;
};