const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const ajuste = sequelize.define(
  "ajuste",
  {
    Aju_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Suc_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "sucursales",
        key: "Suc_id",
      },
    },
    Us_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "Us_id",
      },
    },
    Motivo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    observacion: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "ajuste",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "Aju_Id" }],
      },
      {
        name: "Us_id",
        using: "BTREE",
        fields: [{ name: "Us_id" }, { name: "Suc_id" }],
      },
    ],
  }
);

module.exports = ajuste;
