const express = require('express');
const ControllerFilme = require('../controllers/filmeController');
const router = express.Router();

router.post('/',ControllerFilme.criarFilme );
router.get('/',ControllerFilme.obterTodosFilmes );
router.get('/:id',ControllerFilme.obterFilmesPorId );
router.put('/:id',ControllerFilme.atualizarFilme );
router.delete('/:id',ControllerFilme.excluirFilme);

module.exports = router;