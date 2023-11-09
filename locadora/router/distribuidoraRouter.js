const express = require('express');
const ControllerDistribuidora = require('../controllers/distribuidoraController');
const router = express.Router();

router.post('/',ControllerDistribuidora.criarDistribuidora);
router.get('/',ControllerDistribuidora.obterTodasDistribuidoras);
router.get('/:id',ControllerDistribuidora.obterDistribuidoraPorId);
router.put('/:id',ControllerDistribuidora.atualizarDistribuidora);
router.delete('/:id',ControllerDistribuidora.excluirDistribuidora);

module.exports = router;

