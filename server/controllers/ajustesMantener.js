const { vs_ajustes } = require("../models");

class mercaderiasContollers {


  static async getAjuste(req, res) {
    const response = await vs_ajustes.findAll();
    res.status(200).json({
      status: true,
      message: "mercaderias encontradas",
      data: response,
    });
  }

  static async getAjusteById(req, res) {
    try {
      const { id } = req.params;
      const response = await vs_ajustes.findByPk(id);
      res.status(200).json({
        status: true,
        message: "ajuste eocntrado",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }

  static async createAjuste(req, res) {
    try {
      const { sucursal, tipoajuste, observacion, estado} = req.body;
      const response = await vs_ajustes.create({ sucursal, tipoajuste, observacion, estado});
      res.status(200).json({
        status: true,
        message: "ajuste creado",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
  
  static async updateAjuste(req, res) {
    try {
      const { body } = req.body;
      const { id } = req.params;
      const response = await vs_ajustes.update(
        { ...body },
        { where: { id } }
      );
      res.status(200).json({
        status: true,
        message: "ajuste modificado",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async deleteAjuste(req, res) {
    try {
      const { id } = req.params;
      const response = await vs_ajustes.destroy({ where: { id } });
      res.status(200).json({
        status: true,
        message: "ajuste eliminado",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = mercaderiasContollers;