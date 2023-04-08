const { Router } = require("express");
const pedidosContollers = require('../controllers/pedidos')
const router = Router();

router.get("/pedidos", pedidosContollers.getPedidos);
router.get("/pedidos/pdf", pedidosContollers.generatePdf);
router.get("/pedidos/exel", pedidosContollers.generateExel);
router.get("/pedidos/:id", pedidosContollers.getpedidosById);
router.post("/pedidos", pedidosContollers.createPedidos);
router.patch("/pedidos/:id", pedidosContollers.updatePedidos);
router.delete("/pedidos/:id", pedidosContollers.deletePedidos);

module.exports = router;
