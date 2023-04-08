const { Router } = require("express");
const mercaderiasControllers = require('../controllers/mercaderias')
const router = Router();

router.get("/mercaderias", mercaderiasControllers.getMercaderia);
router.get("/mercaderias/:id", mercaderiasControllers.getMercaderiaById);
router.post("/mercaderias", mercaderiasControllers.createMercaderia);
router.patch("/mercaderias/:id", mercaderiasControllers.updateMercaderia);
router.delete("/mercaderias/:id", mercaderiasControllers.deleteMercaderia);

module.exports = router;