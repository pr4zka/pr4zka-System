const { Router } = require("express");
const ciudadesContollers = require('../controllers/ciudades')
const router = Router();

router.get("/ciudades", ciudadesContollers.getCiudades);
router.get("/ciudades/pdf", ciudadesContollers.generatePdf);
router.get("/ciudades/:id", ciudadesContollers.getCiudadesById);
router.post("/ciudades", ciudadesContollers.createCiudades);
router.patch("/ciudades/:id", ciudadesContollers.updateCiudades);
router.delete("/ciudades/:id", ciudadesContollers.deleteCiudades);

module.exports = router;
