const { Router } = require("express");
const marcasControllers = require('../controllers/marcas')
const router = Router();

router.get("/marcas", marcasControllers.getMarcas);
router.get("/marcas/:id", marcasControllers.getMarcasById);
router.post("/marcas", marcasControllers.createMarcas);
router.patch("/marcas/:id", marcasControllers.updateMarcas);
router.delete("/marcas/:id", marcasControllers.deleteMarcas);

module.exports = router;
