const express = require('express');
const ControllerLogin = require('../controllers/loginController');
const router = express.Router();

router.post('/',ControllerLogin.criarLogin);
router.get('/',ControllerLogin.obterTodosLogins);
router.get('/:id',ControllerLogin.obterLoginsPorId);
router.put('/:id',ControllerLogin.atualizarLogin);
router.delete('/:id',ControllerLogin.excluirLogin);

module.exports = router;