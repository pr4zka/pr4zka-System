const { Router } = require("express");
const empleadosControllers = require('../controllers/empleados')
const router = Router();

router.get("/empleados", empleadosControllers.getEmpleados);
router.get("/empleados/:id", empleadosControllers.getEmpleadoById);
router.post("/empleados", empleadosControllers.createEmpleado);
router.patch("/empleados/:id", empleadosControllers.updateEmpleado);
router.delete("/empleados/:id", empleadosControllers.deleteEmpleado);

module.exports = router;
