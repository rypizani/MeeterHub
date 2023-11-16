const express = require('express');
const ControllerFilme = require('../controllers/filmeController');
const router = express.Router();
const verificarAcesso = require('../middleware/acesso');

router.post('/', verificarAcesso, ControllerFilme.criarFilme );
router.get('/',ControllerFilme.obterTodosFilmes );
router.get('/:id',ControllerFilme.obterFilmesPorId );
router.put('/:id', verificarAcesso, ControllerFilme.atualizarFilme );
router.delete('/:id',verificarAcesso, ControllerFilme.excluirFilme);

module.exports = router;