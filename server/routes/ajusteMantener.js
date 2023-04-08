const { Router } = require("express");
const mantenerAjuste = require('../controllers/ajustesMantener')
const router = Router();

router.get("/ajuste_mantener", mantenerAjuste.getAjuste);
router.get("/ajuste_manteners/:id", mantenerAjuste.getAjusteById);
router.post("/ajuste_mantener", mantenerAjuste.createAjuste);
router.patch("/ajuste_mantener/:id", mantenerAjuste.updateAjuste);
router.delete("/ajuste_mantener/:id", mantenerAjuste.deleteAjuste);

module.exports = router;
