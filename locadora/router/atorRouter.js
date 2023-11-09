const express = require('express');
const ControllerAtor = require('../controllers/atorController');
const router = express.Router();

router.post('/',ControllerAtor.criarAtor);
router.get('/',ControllerAtor.obterTodosAtores);
router.get('/:id',ControllerAtor.obterAtorPorId);
router.put('/:id',ControllerAtor.atualizarAtor);
router.delete('/:id',ControllerAtor.excluirAtor);

module.exports = router;