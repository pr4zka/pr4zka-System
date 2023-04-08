 const {DataTypes} = require('sequelize');
const {sequelize} = require('../database/db');
 
 const detalle_compras = sequelize.define('detalle_compras', {
    Com_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'compras',
        key: 'Com_id'
      }
    },
    Mer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mercaderias',
        key: 'Mer_id'
      }
    },
    cantidad: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false
    },
    importe: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: true
    },
    ivaexente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    iva5: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    iva10: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'detalle_compras',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Com_id" },
        ]
      },
      {
        name: "Mer_id",
        using: "BTREE",
        fields: [
          { name: "Mer_id" },
        ]
      },
    ]
  });
module.exports = detalle_compras;
