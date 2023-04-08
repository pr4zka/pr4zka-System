const auathservice = require("../services/authService");
const auathService = new auathservice();
const User = require("../models/users");
const Sucursales = require("../models/sucursales");
const initModels = require("../models/init-models");
const {sequelize} = require('../database/db')
const models = initModels(sequelize);

const { generateToken } = require("../helpers/jwt");

class auhtController {
  static async login(req, res) {
    const { password } = req.body;
    try {
      const user = await User.findOne({ where: { usuario: req.body.usuario } });
      if (!user) {
      return res.status(400).json({ msg: "Usuario no encontrado" });
      }
      const isMatch = await auathService.compare(password, user.password);
      if (!isMatch) {
       return res.status(400).json({ msg: "Contraseña incorrecta" });
      }
     
      const data = {
        token: await generateToken(user)
      };
      return res.json({
        data,
        msg: `Bienvenido ${user.usuario}`
      });
      
    } catch (error) {
      res.json(error).status(500);
    }
  }

  static async register(req, res) {
    const { Us_id, Suc_id, usuario, password } = req.body;
    const suc = await Sucursales.findOne({ where: { Suc_id } });
    const body = {
      Us_id,
      Suc_id: suc.Suc_id,
      usuario,
      password,
    }
    const user = await auathService.register(body);
    return res.json(user);
  }

  static async getUsers(req, res){
    const id = req.params.id;
    const users = await models.users.findOne({
      where: { Us_id: id },
      include: [
        {
          model: models.sucursales,
          as: "Suc",
        },
      ],
    });
  
    res.json(users);
  }
}

module.exports = auhtController;
