const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
  const pedidos = sequelize.define('pedidos', {
    Ped_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Pro_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'proveedores',
        key: 'Pro_Id'
      }
    },
    Us_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'Us_id'
      }
    },
    Ped_fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Ped_observacion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Ped_estado: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pedidos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Ped_Id" },
        ]
      },
      {
        name: "Pro_Id",
        using: "BTREE",
        fields: [
          { name: "Pro_Id" },
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
module.exports = pedidos;
