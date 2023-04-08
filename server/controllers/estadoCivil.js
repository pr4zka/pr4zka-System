const { estado_civil } = require("../models");

class estadoCivilControllers {

  static async getEstado(req, res) {
    const response = await estado_civil.findAll();
    res.status(200).json({
      status: true,
      message: "estados civiles encontrados",
      data: response,
    });
  }

  static async getEstadoById(req, res) {
    try {
      const { id } = req.params;
      const response = await estado_civil.findByPk(id);
      res.status(200).json({
        status: true,
        message: "estado civil eocntrado",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }

  static async createEstado(req, res) {
    try {
      const { descripcion } = req.body;
      const response = await estado_civil.create({ descripcion });
      res.status(200).json({
        status: true,
        message: "estado civil creado",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
  
  static async updateEstado(req, res) {
    try {
      const { descripcion } = req.body;
      const { id } = req.params;
      const response = await estado_civil.update(
        { descripcion },
        { where: { id } }
      );
      res.status(200).json({
        status: true,
        message: "estado civil modificado",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async deleteEstado(req, res) {
    try {
      const { id } = req.params;
      const response = await estado_civil.destroy({ where: { id } });
      res.status(200).json({
        status: true,
        message: "estado civil eliminado",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = estadoCivilControllers;