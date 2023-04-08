const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
  const ped_detalle = sequelize.define('ped_detalle', {
    Mer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mercaderias',
        key: 'Mer_id'
      }
    },
    Ped_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pedidos',
        key: 'Ped_Id'
      }
    },
    Ped_cantidad: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ped_detalle',
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
        name: "Ped_Id",
        using: "BTREE",
        fields: [
          { name: "Ped_Id" },
        ]
      },
    ]
  });
module.exports = ped_detalle;
