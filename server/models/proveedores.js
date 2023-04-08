const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
  const proveedores = sequelize.define('proveedores', {
    Pro_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'paises',
        key: 'id'
      }
    },
    Ciu_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ciudades',
        key: 'Ciu_id'
      }
    },
    razonsocial: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ruc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'proveedores',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Pro_Id" },
        ]
      },
      {
        name: "Ciu_id",
        using: "BTREE",
        fields: [
          { name: "Ciu_id" },
        ]
      },
      {
        name: "id",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
module.exports = proveedores;
