const {DataTypes} = require('sequelize');
const {sequelize} = require('../database/db');
  const detalle_ajuste = sequelize.define('detalle_ajuste', {
    Mer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mercaderias',
        key: 'Mer_id'
      }
    },
    Aju_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ajuste',
        key: 'Aju_Id'
      }
    },
    Suc_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sucursales',
        key: 'Suc_id'
      }
    },
    tipo_ajuste: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'detalle_ajuste',
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
        name: "Aju_Id",
        using: "BTREE",
        fields: [
          { name: "Aju_Id" },
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
module.exports = detalle_ajuste;
