const { cargos } = require("../models");

class cargosContollers {


  static async getCargos(req, res) {
    const response = await cargos.findAll();
    res.status(200).json({
      status: true,
      message: "cargos encontrados",
      data: response,
    });
  }

  static async getCargoById(req, res) {
    try {
      const { id } = req.params;
      const response = await cargos.findByPk(id);
      res.status(200).json({
        status: true,
        message: "cargo eocntrado",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }

  static async createCargos(req, res) {
    try {
      const { descripcion } = req.body;
      const response = await cargos.create({ descripcion });
      res.status(200).json({
        status: true,
        message: "cargo creado",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
  
  static async updateCargos(req, res) {
    try {
      const { descripcion } = req.body;
      const { id } = req.params;
      const response = await cargos.update(
        { descripcion },
        { where: { id } }
      );
      res.status(200).json({
        status: true,
        message: "cargo modificada",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async deleteCargos(req, res) {
    try {
      const { id } = req.params;
      const response = await cargos.destroy({ where: { id } });
      res.status(200).json({
        status: true,
        message: "cargo eliminada",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = cargosContollers;
