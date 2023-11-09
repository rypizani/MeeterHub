const express = require('express');
const ControllerAlocacoes = require('../controllers/alocacoesController');
const router = express.Router();

router.post('/',ControllerAlocacoes.criarAlocacoes);
router.get('/',ControllerAlocacoes.obterTodosAlocacoes);
router.get('/:id',ControllerAlocacoes.obterAlocacoesPorId);
router.put('/:id',ControllerAlocacoes.atualizarAlocacoes);
router.delete('/:id',ControllerAlocacoes.excluirAlocacoes);

module.exports = router;