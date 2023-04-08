const {DataTypes} = require('sequelize');
const {sequelize} = require('../database/db');
  const compras = sequelize.define('compras', {
    Com_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    Suc_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sucursales',
        key: 'Suc_id'
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
    Us_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'Us_id'
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tip_comprobante: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ser_compronbante: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nro_factura: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    observacion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalexenta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    titaliva5: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totaliva10: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'compras',
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
        name: "Suc_id",
        using: "BTREE",
        fields: [
          { name: "Suc_id" },
        ]
      },
      {
        name: "Ped_Id",
        using: "BTREE",
        fields: [
          { name: "Ped_Id" },
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
  module.exports = compras;
