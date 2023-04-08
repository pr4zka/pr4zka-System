require("dotenv").config();
module.exports = {
  port: process.env.port,
  PORT: process.env.PORT,
  PASSWORD: process.env.PASSWORD,
  USERNAME: process.env.USERNAME,
  DATABASE: process.env.DATABASE,
  HOST: process.env.HOST,
  JWT_SECRET: process.env.JWT_SECRET,
};
