const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
  const users = sequelize.define('users', {
    Us_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    Suc_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sucursales',
        key: 'Suc_id'
      }
    },
    usuario: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Us_id" },
          { name: "Suc_id" },
        ]
      },
      {
        name: "Suc_id",
        using: "BTREE",
        fields: [
          { name: "Suc_id" },
        ]
      },
    ]
  });
module.exports = users;
