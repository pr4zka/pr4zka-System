const { marcas } = require("../models");

class marcasControllers {

  static async getMarcas(req, res) {
    const response = await marcas.findAll();
    res.status(200).json({
      status: true,
      message: "marca encontrada",
      data: response,
    });
  }

  static async getMarcasById(req, res) {
    try {
      const { id } = req.params;
      const response = await marcas.findByPk(id);
      res.status(200).json({
        status: true,
        message: "marca eocntrada",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }

  static async createMarcas(req, res) {
    try {
      const { descripcion } = req.body;
      const response = await marcas.create({ descripcion });
      res.status(200).json({
        status: true,
        message: "marca creada",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
  
  static async updateMarcas(req, res) {
    try {
      const { descripcion } = req.body;
      const { id } = req.params;
      const response = await marcas.update(
        { descripcion },
        { where: { id } }
      );
      res.status(200).json({
        status: true,
        message: "marca modificada",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async deleteMarcas(req, res) {
    try {
      const { id } = req.params;
      const response = await marcas.destroy({ where: { id } });
      res.status(200).json({
        status: true,
        message: "marca eliminada",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = marcasControllers;
