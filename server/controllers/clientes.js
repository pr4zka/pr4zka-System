const clientes = require("../models/clientes");

class clientesContollers {


  static async getClientes(req, res) {
    const response = await clientes.findAll();
    res.status(200).json({
      status: true,
      message: "Clientes encontrados",
      data: response,
    });
  }

  static async getClientesId(req, res) {
    try {
      const { id } = req.params;
      const response = await ciudades.findByPk(id);
      res.status(200).json({
        status: true,
        message: "Ciudad eocntrada",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }

  static async createClientes(req, res) {
    try {
      const { Cedula, Nombre, Apellido } = req.body;
      const response = await clientes.create({ Cedula, Nombre, Apellido });
      res.status(200).json({
        status: true,
        message: "Ciudad creada",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
  
  static async updateClientes(req, res) {
    try {
      const { descripcion } = req.body;
      const { id } = req.params;
      const response = await ciudades.update(
        { descripcion },
        { where: { id } }
      );
      res.status(200).json({
        status: true,
        message: "Ciudad modificada",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async deleteClientes(req, res) {
    try {
      const { id } = req.params;
      const response = await ciudades.destroy({ where: { id } });
      res.status(200).json({
        status: true,
        message: "Ciudad eliminada",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = clientesContollers;
