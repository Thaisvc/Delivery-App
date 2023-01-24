module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    price: { type: DataTypes.DECIMAL(9, 2), allowNull: false },
    urlImage: { type: DataTypes.STRING, allowNull: false, defaultValue: '' },

  },
    {
      timestamps: false,
      tableName: 'products',
      underscored: true,
    });

  return Product;
};