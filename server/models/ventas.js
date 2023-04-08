const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
  const ventas = sequelize.define('ventas', {
    Vta_Id: {
      type: DataTypes.DECIMAL(9,0),
      allowNull: false,
      primaryKey: true
    },
    Clie_Id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'clientes',
        key: 'Clie_Id'
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
    Us_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'Us_id'
      }
    },
    Vta_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Vta_total: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Vta_totexenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    Vta_total5: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    Vta_total10: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ventas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Vta_Id" },
        ]
      },
      {
        name: "Clie_Id",
        using: "BTREE",
        fields: [
          { name: "Clie_Id" },
        ]
      },
      {
        name: "Suc_id",
        using: "BTREE",
        fields: [
          { name: "Suc_id" },
        ]
      },
      {
        name: "Us_id",
        using: "BTREE",
        fields: [
          { name: "Us_id" },
          { name: "Suc_id" },
        ]
      },
    ]
  });
  module.exports = ventas;
