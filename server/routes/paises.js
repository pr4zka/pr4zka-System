const { Router } = require("express");
const paisesControllers = require('../controllers/paises')
const router = Router();

router.get("/paises", paisesControllers.get);
router.get("/paises/:id", paisesControllers.getById);
router.post("/paises", paisesControllers.create);
router.patch("/paises/:id", paisesControllers.update);
router.delete("/paises/:id", paisesControllers.delete);

module.exports = router;
