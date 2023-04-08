const {DataTypes} = require('sequelize');
const {sequelize} = require('../database/db');
  const clientes = sequelize.define('clientes', {
    Clie_Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Cedula: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Nombre: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Apellido: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Clie_Id" },
        ]
      },
    ]
  });

module.exports = clientes;
