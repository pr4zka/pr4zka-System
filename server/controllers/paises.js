const  paises  = require("../models/paises");

class paisesControllers {

  static async get(req, res) {
    const response = await paises.findAll();
    res.status(200).json({
      status: true,
      message: "Lista completa",
      data: response,
    });
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const response = await paises.findByPk(id);
      res.status(200).json({
        status: true,
        message: "Econtrado con exito",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }

  static async create(req, res) {
    try {
      const { descripcion } = req.body;
      const response = await paises.create({ descripcion });
      res.status(200).json({
        status: true,
        message: "Creado con exito",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
  
  static async update(req, res) {
    try {
      const { descripcion } = req.body;
      const { id } = req.params;
      const response = await paises.update(
        { descripcion },
        { where: { id } }
      );
      res.status(200).json({
        status: true,
        message: "Actualizado con exito",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const response = await paises.destroy({ where: { id } });
      res.status(200).json({
        status: true,
        message: "Eliminado con exito",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = paisesControllers;
