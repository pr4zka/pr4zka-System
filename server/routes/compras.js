const { Router } = require("express");
const comprasControllers = require('../controllers/compras')
const router = Router();
router.get("/compras", comprasControllers.getCompras);
router.get("/compras/pdf", comprasControllers.generatePdf);
router.get("/compras/:id", comprasControllers.getComprasById);
router.post("/compras", comprasControllers.createCompras);
router.patch("/compras/:id", comprasControllers.updateCompras);
router.delete("/compras/:id", comprasControllers.deleteCompras);

module.exports = router;
