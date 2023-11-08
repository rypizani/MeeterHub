const express = require('express');
const ControllerPais = require('../controllers/paisController');
const router = express.Router();

router.post('/',ControllerPais.criarPais);
router.get('/',ControllerPais.obterTodosPais);
router.get('/:id',ControllerPais.obterPaisPorId);
router.put('/:id',ControllerPais.atualizarPais);
router.delete('/:id',ControllerPais.excluirPais);

module.exports = router;