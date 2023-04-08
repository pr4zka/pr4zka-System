const pedidos = require("../models/pedidos");
const PDFDocument = require("pdfkit-table");
const sucursales = require("../models/sucursales");
const proveedores = require("../models/proveedores");
const users = require("../models/users");
const exel = require("exceljs");

class pedidosContollers {
  static async getPedidos(req, res) {
    const response = await pedidos.findAll({
      include: [
        {
          model: proveedores,
          as: "Pro",
        },
        {
          model: users,
          as: "U",
          attributes: ["usuario", "Suc_id"],
          include: [
            {
              model: sucursales,
              as: "Suc",
              attributes: ["descripcion"],
            },
          ],
        },
      ],
    });
    return res.status(200).json({
      status: true,
      message: "pedidos encontrados",
      data: response,
    });
  }

  static async generatePdf(req, res) {
    const doc = new PDFDocument();

    pedidos
      .findAll({
        include: [
          {
            model: proveedores,
            as: "Pro",
          },
          {
            model: users,
            as: "U",
            attributes: ["usuario"],
          },
        ],
      })
      .then((ped) => {
        // Genera la tabla con los datos
        doc
          .fontSize(12)
          .text("Registro Pedidos", { align: "center" })
          .moveDown(0.5);
        const table = {
          headers: [
            "Pedido",
            "Proveedor",
            "Usuario",
            "Fecha_Ped",
            "Observacion",
            "Estado",
          ],
          rows: [],
        };
        ped.forEach((pedido) => {
          const formattedDate = new Date(pedido.Ped_fecha).toLocaleDateString(
            "es-ES"
          );
          table.rows.push([
            pedido.Ped_Id,
            pedido.Pro.razonsocial,
            pedido.U.usuario,
            formattedDate,
            pedido.Ped_observacion,
            pedido.Ped_estado,
          ]);
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
      .catch((err) => {
        console.error("Error retrieving users from the database: " + err);
        res.status(500).send("Error retrieving users from the database");
      });
  }

  static async generateExel(req, res) {
      const workbook = new exel.Workbook();
      const worksheet = workbook.addWorksheet("Pedidos");
      const response = await pedidos.findAll({
        include: [
          {
            model: proveedores,
            as: "Pro",
          },
          {
            model: users,
            as: "U",
            attributes: ["usuario"],
          },
        ],
      });
      worksheet.columns = [
        { header: "Pedido", key: "Ped_Id" },
        { header: "Proveedor", key: "razonsocial" },
        { header: "Usuario", key: "usuario" },
        { header: "Fecha_Ped", key: "fecha" },
        { header: "Observacion", key: "observacion" },
        { header: "Estado", key: "estado" },
      ];
      response.forEach((pedido) => {
        worksheet.addRow({
          Ped_Id: pedido.Ped_Id,
          razonsocial: pedido.Pro.razonsocial,
          usuario: pedido.U.usuario,
          fecha: pedido.Ped_fecha,
          observacion: pedido.Ped_observacion,
          estado: pedido.Ped_estado,
        });
      });
      res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${`pedidos-${Date.now()}`}.xlsx"`
      );
      await workbook.xlsx.write(res);
      res.end();
      
  }

  static async getpedidosById(req, res) {
    try {
      const { id } = req.params;
      const response = await pedidos.findByPk(id, {
        include: [
          {
            model: proveedores,
            as: "Pro",
          },
          {
            model: users,
            as: "U",
            attributes: ["usuario"],
          },
        ],
      });
      console.log(response);
      res.status(200).json({
        status: true,
        message: "pedido encontrado",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }

  static async createPedidos(req, res) {
    try {
      const { body } = req;
      const response = await pedidos.create({ ...body });
      res.status(200).json({
        status: true,
        message: "pedido creado",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async updatePedidos(req, res) {
    try {
      const { body } = req;
      const { id } = req.params;
      const data = await pedidos.findByPk(id);
      if (!data) {
        return res.status(400).json({
          status: false,
          message: "pedido no encontrado",
          data: null,
        });
      }
      const response = await pedidos.update(
        { ...body },
        { where: { Ped_Id: id } }
      );
      res.status(200).json({
        status: true,
        message: "pedido modificado",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async deletePedidos(req, res) {
    try {
      const { id } = req.params;
      const response = await pedidos.destroy({ where: { Ped_Id: id } });
      res.status(200).json({
        status: true,
        message: "pedido eliminado",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = pedidosContollers;
