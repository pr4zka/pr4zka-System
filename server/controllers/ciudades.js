const ciudades = require("../models/ciudades");
const PDFDocument = require("pdfkit-table");

class ciudadesContollers {
  static async getCiudades(req, res) {
    const response = await ciudades.findAll();
    return res.status(200).json({
      status: true,
      message: "Ciudades encontradas",
      data: response,
    });
  }
  static async generatePdf(req, res) {
    console.log("Generando PDF");
    const doc = new PDFDocument();

    ciudades
      .findAll()
      .then((usuarios) => {
        // Genera la tabla con los datos
        doc
          .fontSize(12)
          .text("Registro Ciudades", { align: "center" })
          .moveDown(0.5);
        const table = {
          headers: ["ID", "Nombre"],
          rows: [],
        };
        usuarios.forEach((usuario) => {
          table.rows.push([usuario.Ciu_id, usuario.Ciu_descripcion]);
        });
        doc.table(table, {
          prepareHeader: () => doc.font("Helvetica-Bold"),
          prepareRow: (row, i) => doc.font("Helvetica").fontSize(10),
        });
        res.setHeader("Content-Type", "application/pdf");
        // Establece el encabezado de la respuesta
        res.setHeader(
          "Content-Disposition",
          `attachment; filename="${`ciudades-${Date.now()}`}.pdf"`
        );
        // Envía la respuesta de encabezado
        doc.pipe(res);
        doc.end();
      })
        //  headers: ["Pedido", "Proveedor", "Usuario", "Fecha_Ped", "Observacion", "Estado"],
        // pedido.Ped_Id, pedido.Prov_Id, pedido.Usu_Id, pedido.Ped_fecha, pedido.Ped_observacion, pedido.Ped_estado
      .catch((err) => {
        console.error("Error retrieving users from the database: " + err);
        res.status(500).send("Error retrieving users from the database");
      });
  }

  static async getCiudadesById(req, res) {
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

  static async createCiudades(req, res) {
    try {
      const { Ciu_descripcion } = req.body;
      const response = await ciudades.create({ Ciu_descripcion });
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

  static async updateCiudades(req, res) {
    try {
      const { Ciu_descripcion } = req.body;
      const { id } = req.params;
      const response = await ciudades.update(
        { Ciu_descripcion },
        { where: { Ciu_id: id } }
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

  static async deleteCiudades(req, res) {
    try {
      const { id } = req.params;
      const response = await ciudades.destroy({ where: { Ciu_id: id } });
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

module.exports = ciudadesContollers;
