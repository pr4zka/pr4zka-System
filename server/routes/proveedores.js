const { Router } = require("express");
const  proveedor = require('../controllers/proveedores')
const router = Router();
router.get("/provedor", proveedor.getProv);
router.get("/provedor/pdf", proveedor.generatePdf);
router.get("/provedor/:id", proveedor.getProvById);
router.post("/provedor", proveedor.createProv);
router.patch("/provedor/:id", proveedor.updateProv);
router.delete("/provedor/:id", proveedor.deleteProv);

module.exports = router;
