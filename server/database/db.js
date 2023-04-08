const { Sequelize } = require("sequelize");
const {DATABASE, HOST, PORT, USERNAME, PASSWORD, port} = require('./index')
// const database = process.env.DATABASE;
// const username = process.env.USERNAME;
// const password = process.env.PASSWORD;
// const host = process.env.HOST;
// const port = process.env.PORT;

const sequelize = new Sequelize(DATABASE, 'root', 'Narutoshippuden', {
  'host': 'localhost',
  port,
  dialect: "mysql",
});

const dbConnectMysql = async () => {
  await sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been successfully.");
    })
    .catch((err) => {
      console.log("Unable to connect to the database:", err);
    });
};

module.exports = {
  sequelize,
  dbConnectMysql,
};