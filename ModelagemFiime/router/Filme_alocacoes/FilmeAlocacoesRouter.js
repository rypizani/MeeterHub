const { FilmeAlocacoesController } = require('../../controller/Filme_alocacoes/Filme_AlocacoesController');
const router = require("express").Router();

router.get('/', FilmeAlocacoesController.getAll);
router.get('/:filmeAlocacaoId', FilmeAlocacoesController.getById);
router.post('/', FilmeAlocacoesController.post);
router.put('/:filmeAlocacaoId', FilmeAlocacoesController.put);
router.delete('/:filmeAlocacaoId', FilmeAlocacoesController.delete);

module.exports = router;
