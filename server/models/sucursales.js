const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
  const sucursales = sequelize.define('sucursales', {
    Suc_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sucursales',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Suc_id" },
        ]
      },
    ]
  });
module.exports = sucursales;