const { Router } = require("express");
const clientesContollers = require('../controllers/clientes');
const router = Router();

router.get("/clientes", clientesContollers.getClientes);
router.get("/clientes/:id", clientesContollers.getClientesId);
router.post("/clientes", clientesContollers.createClientes);
router.patch("/clientes/:id", clientesContollers.updateClientes);
router.delete("/clientes/:id", clientesContollers.deleteClientes);

module.exports = router;