const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const marcas = sequelize.define(
  "marcas",
  {
    Mar_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "marcas",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "Mar_id" }],
      },
    ],
  }
);
module.exports = marcas;
