const { Router } = require("express");
const estadoCivilControllers = require("../controllers/estadoCivil");
const router = Router();

router.get("/estado", estadoCivilControllers.getEstado);
router.get("/estado/:id", estadoCivilControllers.getEstadoById);
router.post("/estado", estadoCivilControllers.createEstado);
router.patch("/estado/:id", estadoCivilControllers.updateEstado);
router.delete("/estado/:id", estadoCivilControllers.deleteEstado);

module.exports = router;
