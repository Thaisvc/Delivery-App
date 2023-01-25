module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
    totalPrice: { type: DataTypes.DECIMAL(9, 2), allowNull: false },
    deliveryAddress: { type: DataTypes.STRING, allowNull: false },
    deliveryNumber: { type: DataTypes.STRING, allowNull: false },
    saleDate: { type: DataTypes.DATE, allowNull: false, defaultValue: new Date() },
    status: { type: DataTypes.STRING, allowNull: false },

  },
    {
      timestamps: false,
      tableName: 'sales',
      underscored: true,
    });

    Sale.associate = (models) => {
      Sale.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
      Sale.belongsTo(models.User, {
        foreignKey: 'sellerId',
        as: 'seller',
      });
    }
  
  return Sale;
};