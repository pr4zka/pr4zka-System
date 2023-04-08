const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const {sequelize, dbConnectMysql} = require('./database/db')
// const SequelizeAuto = require("sequelize-auto");
const auth = require('./routes/auht')

// const sucursales = require('./models/sucursales')
// const users = require('./models/users')
// const ciudades = require('./models/ciudades')
// const ajuste = require('./models/ajuste')
// const paises = require('./models/paises')
// const marcas = require('./models/marcas')
// const mercaderias = require('./models/mercaderias')
// const clientes = require('./models/clientes')
// const detalle_ajuste = require('./models/detalle_ajuste')
// const detalle_compra = require('./models/detalle_compras')
// const detalle_venta = require('./models/detalle_venta')
// const proveedores = require('./models/proveedores')
// const stcok = require('./models/stocks')
// const ventas = require('./models/ventas')
// const pedidos = require('./models/pedidos')
// const ped_detalle = require('./models/ped_detalle')
// const compras = require('./models/compras') 



// const auto = new SequelizeAuto("der", "root", "Narutoshippuden", {
//   host: "localhost",
//   dialect: "mysql",
//   directory: "./models",
//   port: "3306",

// })
// auto.run(function (err) {
//   if (err) throw err;
//   console.log(auto.tables); // table list
// });
// auto.run().then(function(err) {
//   if (err) throw err;
//   console.log(auto.tables); // table list
// })
// .catch(err => console.log(err));


// settings
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//routes
app.use(auth);
app.use(require("./routes/ciudades"));
app.use(require('./routes/sucursales'))
app.use(require('./routes/clientes'))
app.use(require('./routes/pedidos'))
app.use(require('./routes/proveedores'))
app.use(require('./routes/compras'))
// app.use(require("./routes/cargos"));
// app.use(require("./routes/empleados"));
// app.use(require("./routes/estadoCivil"));
// app.use(require("./routes/marcas"));
// app.use(require("./routes/mercaderias"));
app.use(require("./routes/paises"));
// app.use(require("./routes/ajusteMantener"));
// app.use(require("./routes/vs_compras"));

//server
app.listen(4000, () => {
  sequelize.sync({ force:  false}).then(() => {
    console.log(`Server running on port ${4000}`);
  })
 dbConnectMysql();
  console.log(`Server running on port ${4000}`);
});
