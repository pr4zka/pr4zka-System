const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/index");

const generateToken = async (user) => {
  console.log("token",user.dataValues)
  const token = await jwt.sign({ usuario: user}, JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

const verifyToken = async (user) => {
  const token = await jwt.verify(user, JWT_SECRET);
  return token;
};

module.exports = {
  generateToken,
  verifyToken,
};
