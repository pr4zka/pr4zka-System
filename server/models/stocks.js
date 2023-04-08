const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
  const stocks = sequelize.define('stocks', {
    Suc_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sucursales',
        key: 'Suc_id'
      }
    },
    Mer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mercaderias',
        key: 'Mer_id'
      }
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'stocks',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Mer_id" },
        ]
      },
      {
        name: "Suc_id",
        using: "BTREE",
        fields: [
          { name: "Suc_id" },
        ]
      },
    ]
  });
module.exports = stocks;