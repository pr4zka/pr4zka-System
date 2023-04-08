const {DataTypes} = require('sequelize');
const {sequelize} = require('../database/db');
  const detalle_venta = sequelize.define('detalle_venta', {
    Vta_Id: {
      type: DataTypes.DECIMAL(9,0),
      allowNull: false,
      references: {
        model: 'ventas',
        key: 'Vta_Id'
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
    Cantidad: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    Importe: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    IvaExenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    Iva5: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    Iva10: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'detalle_venta',
    timestamps: false,
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
        name: "Vta_Id",
        using: "BTREE",
        fields: [
          { name: "Vta_Id" },
        ]
      },
    ]
  });
module.exports = detalle_venta;