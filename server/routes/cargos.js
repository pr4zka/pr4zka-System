const { Router } = require("express");
const cargosControllers = require("../controllers/cargos");
const router = Router();

router.get("/cargos", cargosControllers.getCargos);
router.get("/cargos/:id", cargosControllers.getCargoById);
router.post("/cargos", cargosControllers.createCargos);
router.patch("/cargos/:id", cargosControllers.updateCargos);
router.delete("/cargos/:id", cargosControllers.deleteCargos);

module.exports = router;