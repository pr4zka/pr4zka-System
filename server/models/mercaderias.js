const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
  const mercaderias = sequelize.define('mercaderias', {
    Mer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    Mar_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'marcas',
        key: 'Mar_id'
      }
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    preciocompra: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false
    },
    precioventa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Mer_impuesto: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mercaderias',
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
        name: "Mar_id",
        using: "BTREE",
        fields: [
          { name: "Mar_id" },
        ]
      },
    ]
  });
module.exports = mercaderias;
