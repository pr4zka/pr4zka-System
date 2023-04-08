const { Router } = require("express");
const sucursalesControllers = require('../controllers/sucursales')
const router = Router();

router.get("/suc", sucursalesControllers.getCiudades);
router.get("/suc/:id", sucursalesControllers.getCiudadesById);
router.post("/suc", sucursalesControllers.createCiudades);
router.patch("/suc/:id", sucursalesControllers.updateCiudades);
router.delete("/suc/:id", sucursalesControllers.deleteCiudades);

module.exports = router;
