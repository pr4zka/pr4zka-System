const proveedores = require("../models/proveedores");
const paises = require("../models/paises");
const ciudades = require("../models/ciudades");
const PDFDocument = require("pdfkit-table");

class pedidosContollers {
  static async getProv(req, res) {
    const response = await proveedores.findAll({
      include: [
        {
          model: paises,
          as: "id_paise",
          attributes: ["descripcion"],
        },
        {
          model: ciudades,
          as: "Ciu",
          attributes: ["Ciu_descripcion"],
        },
      ]
    });
    return res.status(200).json({
      status: true,
      message: "proveedores encontrados",
      data: response,
    });
  }



  static async generatePdf(req, res) {
    const doc = new PDFDocument();
    proveedores
      .findAll()
      .then((ped) => {
        // Genera la tabla con los datos
        doc
          .fontSize(12)
          .text("Registro Proveedores", { align: "center" })
          .moveDown(0.5);
        const table = {
          headers: [],
          rows: [],
        };
        ped.forEach((pro) => {
          table.rows.push([pro.Pro_Id, pro.id, pro.Us_id ,pro.Ped_fecha, pro.Ped_observacion, pro.Ped_estado]);
        });
        doc.table(table, {
          prepareHeader: () => doc.font("Helvetica-Bold"),
          prepareRow: (row, i) => doc.font("Helvetica").fontSize(10),
        });
        res.setHeader("Content-Type", "application/pdf");
        // Establece el encabezado de la respuesta
        res.setHeader(
          "Content-Disposition",
          `attachment; filename="${`pedidos-${Date.now()}`}.pdf"`
        );
        // Envía la respuesta de encabezado
        doc.pipe(res);
        doc.end();
      })
      .catch((err) => {
        console.error("Error retrieving users from the database: " + err);
        res.status(500).send("Error retrieving users from the database");
      });
  }


  
  static async getProvById(req, res) {
    try {
      const { id } = req.params;
      const response = await proveedores.findByPk(id);
      res.status(200).json({
        status: true,
        message: "proveedor encontrado",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }

  static async createProv(req, res) {
    try {
      const { body } = req;
      const response = await proveedores.create({ ...body });
      res.status(200).json({
        status: true,
        message: "proveedor creado",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async updateProv(req, res) {
    try {
      const { Ciu_descripcion } = req.body;
      const { id } = req.params;
      const response = await proveedores.update(
        { Ciu_descripcion },
        { where: { Ciu_id: id } }
      );
      res.status(200).json({
        status: true,
        message: "proveedor modificado",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async deleteProv(req, res) {
    try {
      const { id } = req.params;
      const response = await proveedores.destroy({ where: {id} });
      res.status(200).json({
        status: true,
        message: "proveedor eliminado",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = pedidosContollers;
