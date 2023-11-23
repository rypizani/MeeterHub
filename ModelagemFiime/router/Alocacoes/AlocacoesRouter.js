const { AlocacoesController } = require('../../controller/Alocacoes/AlocacoesController');
const router = require("express").Router();

router.post('/', AlocacoesController.post);
router.get('/', AlocacoesController.getAll);
router.get('/:alocacoesId', AlocacoesController.getById);
router.put('/:alocacoesId', AlocacoesController.put);
router.delete('/:alocacoesId', AlocacoesController.delete)

module.exports = router;