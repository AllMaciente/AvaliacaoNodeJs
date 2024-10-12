const express = require("express");
const ControllerCalculadora = require("../controllers/calculadora");
const router = express.Router();

router.get("/", ControllerCalculadora.info);
router.post("/somar", ControllerCalculadora.Somar);
router.post("/subtrair", ControllerCalculadora.Diminuir);
router.post("/multiplicar", ControllerCalculadora.Multiplicar);
router.post("/dividir", ControllerCalculadora.Dividir);
router.post("/potencia", ControllerCalculadora.Potencia);
router.post("/raiz", ControllerCalculadora.Raiz);

module.exports = router;
