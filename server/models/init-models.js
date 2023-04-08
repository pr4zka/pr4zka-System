var DataTypes = require("sequelize").DataTypes;
var ajuste = require("./ajuste");
var ciudades = require("./ciudades");
var clientes = require("./clientes");
var compras = require("./compras");
var detalle_ajuste = require("./detalle_ajuste");
var detalle_compras = require("./detalle_compras");
var detalle_venta = require("./detalle_venta");
var marcas = require("./marcas");
var mercaderias = require("./mercaderias");
var paises = require("./paises");
var ped_detalle = require("./ped_detalle");
var pedidos = require("./pedidos");
var proveedores = require("./proveedores");
// var sequelizemeta = require("./sequelizemeta");
var stocks = require("./stocks");
var sucursales = require("./sucursales");
var users = require("./users");
var ventas = require("./ventas");

function initModels(sequelize) {
  // var ajuste = _ajuste(sequelize, DataTypes);
  // var ciudades = _ciudades(sequelize, DataTypes);
  // var clientes = _clientes(sequelize, DataTypes);
  // var compras = _compras(sequelize, DataTypes);
  // var detalle_ajuste = _detalle_ajuste(sequelize, DataTypes);
  // var detalle_compras = _detalle_compras(sequelize, DataTypes);
  // var detalle_venta = _detalle_venta(sequelize, DataTypes);
  // var marcas = _marcas(sequelize, DataTypes);
  // var mercaderias = _mercaderias(sequelize, DataTypes);
  // var paises = _paises(sequelize, DataTypes);
  // var ped_detalle = _ped_detalle(sequelize, DataTypes);
  // var pedidos = _pedidos(sequelize, DataTypes);
  // var proveedores = _proveedores(sequelize, DataTypes);
  // var sequelizemeta = _sequelizemeta(sequelize, DataTypes);
  // var stocks = _stocks(sequelize, DataTypes);
  // var sucursales = _sucursales(sequelize, DataTypes);
  // var users = _users(sequelize, DataTypes);
  // var ventas = _ventas(sequelize, DataTypes);

  detalle_ajuste.belongsTo(ajuste, { as: "Aju", foreignKey: "Aju_Id"});
  ajuste.hasMany(detalle_ajuste, { as: "detalle_ajustes", foreignKey: "Aju_Id"});
  proveedores.belongsTo(ciudades, { as: "Ciu", foreignKey: "Ciu_id"});
  ciudades.hasMany(proveedores, { as: "proveedores", foreignKey: "Ciu_id"});
  ventas.belongsTo(clientes, { as: "Clie", foreignKey: "Clie_Id"});
  clientes.hasMany(ventas, { as: "venta", foreignKey: "Clie_Id"});
  detalle_compras.belongsTo(compras, { as: "Com", foreignKey: "Com_id"});
  compras.hasOne(detalle_compras, { as: "detalle_compra", foreignKey: "Com_id"});
  mercaderias.belongsTo(marcas, { as: "Mar", foreignKey: "Mar_id"});
  marcas.hasMany(mercaderias, { as: "mercaderia", foreignKey: "Mar_id"});
  detalle_ajuste.belongsTo(mercaderias, { as: "Mer", foreignKey: "Mer_id"});
  mercaderias.hasOne(detalle_ajuste, { as: "detalle_ajuste", foreignKey: "Mer_id"});
  detalle_compras.belongsTo(mercaderias, { as: "Mer", foreignKey: "Mer_id"});
  mercaderias.hasMany(detalle_compras, { as: "detalle_compras", foreignKey: "Mer_id"});
  detalle_venta.belongsTo(mercaderias, { as: "Mer", foreignKey: "Mer_id"});
  mercaderias.hasOne(detalle_venta, { as: "detalle_ventum", foreignKey: "Mer_id"});
  ped_detalle.belongsTo(mercaderias, { as: "Mer", foreignKey: "Mer_id"});
  mercaderias.hasOne(ped_detalle, { as: "ped_detalle", foreignKey: "Mer_id"});
  stocks.belongsTo(mercaderias, { as: "Mer", foreignKey: "Mer_id"});
  mercaderias.hasOne(stocks, { as: "stock", foreignKey: "Mer_id"});
  proveedores.belongsTo(paises, { as: "id_paise", foreignKey: "id"});
  paises.hasMany(proveedores, { as: "proveedores", foreignKey: "id"});
  compras.belongsTo(pedidos, { as: "Ped", foreignKey: "Ped_Id"});
  pedidos.hasMany(compras, { as: "compras", foreignKey: "Ped_Id"});
  ped_detalle.belongsTo(pedidos, { as: "Ped", foreignKey: "Ped_Id"});
  pedidos.hasMany(ped_detalle, { as: "ped_detalles", foreignKey: "Ped_Id"});
  pedidos.belongsTo(proveedores, { as: "Pro", foreignKey: "Pro_Id"});
  proveedores.hasMany(pedidos, { as: "pedidos", foreignKey: "Pro_Id"});
  detalle_ajuste.belongsTo(sucursales, { as: "Suc", foreignKey: "Suc_id"});
  sucursales.hasMany(detalle_ajuste, { as: "detalle_ajustes", foreignKey: "Suc_id"});
  stocks.belongsTo(sucursales, { as: "Suc", foreignKey: "Suc_id"});
  sucursales.hasMany(stocks, { as: "stocks", foreignKey: "Suc_id"});
  users.belongsTo(sucursales, { as: "Suc", foreignKey: "Suc_id"});
  sucursales.hasMany(users, { as: "users", foreignKey: "Suc_id"});
  ajuste.belongsTo(users, { as: "U", foreignKey: "Us_id"});
  users.hasMany(ajuste, { as: "ajustes", foreignKey: "Us_id"});
  ajuste.belongsTo(users, { as: "Suc", foreignKey: "Suc_id"});
  users.hasMany(ajuste, { as: "Suc_ajustes", foreignKey: "Suc_id"});
  compras.belongsTo(sucursales, { as: "Suc", foreignKey: "Suc_id"});
  users.hasMany(compras, { as: "compras", foreignKey: "Suc_id"});
  compras.belongsTo(users, { as: "U", foreignKey: "Us_id"});
  users.hasMany(compras, { as: "Us_compras", foreignKey: "Us_id"});
  pedidos.belongsTo(users, { as: "U", foreignKey: "Us_id"});
  users.hasMany(pedidos, { as: "pedidos", foreignKey: "Us_id"});
  pedidos.belongsTo(users, { as: "Suc", foreignKey: "Suc_id"});
  users.hasMany(pedidos, { as: "Suc_pedidos", foreignKey: "Suc_id"});
  ventas.belongsTo(users, { as: "Suc", foreignKey: "Suc_id"});
  users.hasMany(ventas, { as: "venta", foreignKey: "Suc_id"});
  ventas.belongsTo(users, { as: "U", foreignKey: "Us_id"});
  users.hasMany(ventas, { as: "Us_venta", foreignKey: "Us_id"});
  detalle_venta.belongsTo(ventas, { as: "Vtum", foreignKey: "Vta_Id"});
  ventas.hasMany(detalle_venta, { as: "detalle_venta", foreignKey: "Vta_Id"});

  return {
    ajuste,
    ciudades,
    clientes,
    compras,
    detalle_ajuste,
    detalle_compras,
    detalle_venta,
    marcas,
    mercaderias,
    paises,
    ped_detalle,
    pedidos,
    proveedores,
    // sequelizemeta,
    stocks,
    sucursales,
    users,
    ventas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
