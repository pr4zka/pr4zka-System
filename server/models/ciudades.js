const {DataTypes} = require('sequelize');
const {sequelize} = require('../database/db');
  const ciudades = sequelize.define('ciudades', {
    Ciu_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    Ciu_descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'ciudades',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Ciu_id" },
        ]
      },
    ]
  });

  module.exports = ciudades;