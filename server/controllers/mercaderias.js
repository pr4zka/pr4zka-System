const mercaderias = require("../models/mercaderias")
const marcas = require('../models/marcas')
class mercaderiasContollers {


  static async getMercaderia(req, res) {
    const response = await mercaderias.findAll({include: [
       {
        model: marcas,
        as: 'Mar',
        attributes: ['descripcion'],
       }
    ]});
    res.status(200).json({
      status: true,
      message: "mercaderias encontradas",
      data: response,
    });
  }

  static async getMercaderiaById(req, res) {
    try {
      const { id } = req.params;
      const response = await mercaderias.findByPk(id);
      res.status(200).json({
        status: true,
        message: "mercaderia eocntrado",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }

  static async createMercaderia(req, res) {
    try {
      const {Mar_id, descripcion, estado, preciocompra, precioventa, Mer_impuesto } = req.body;
      const response = await mercaderias.create({Mar_id, descripcion, estado, preciocompra, precioventa, Mer_impuesto });
      res.status(200).json({
        status: true,
        message: "mercaderia creada",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
  
  static async updateMercaderia(req, res) {
    try {
      const { body } = req.body;
      const { id } = req.params;
      const response = await mercaderias.update(
        { ...body },
        { where: { id } }
      );
      res.status(200).json({
        status: true,
        message: "mercaderia modificado",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async deleteMercaderia(req, res) {
    try {
      const { id } = req.params;
      const response = await mercaderias.destroy({ where: { id } });
      res.status(200).json({
        status: true,
        message: "mercaderia eliminado",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = mercaderiasContollers;