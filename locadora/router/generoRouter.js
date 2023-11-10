const express = require("express");
const ControllerGenero = require("../controllers/generoController");
const router = express.Router();

router.post("/", ControllerGenero.criarGenero);
router.get("/", ControllerGenero.obterTodosGeneros);
router.get("/:id", ControllerGenero.obterGeneroPorId);
router.put("/:id", ControllerGenero.atualizarGenero);
router.delete("/:id", ControllerGenero.excluirGenero);

module.exports = router;
