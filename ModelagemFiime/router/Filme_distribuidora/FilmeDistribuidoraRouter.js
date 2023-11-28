const { FilmeDistribuidoraController } = require('../../controller/Filme_distribuidora/Filme_DistribuidoraController');
const router = require("express").Router();

router.get('/', FilmeDistribuidoraController.getAll);
router.get('/:filmeDistribuidoraId', FilmeDistribuidoraController.getById);
router.post('/', FilmeDistribuidoraController.post);
router.put('/:filmeDistribuidoraId', FilmeDistribuidoraController.put);
router.delete('/:filmeDistribuidoraId', FilmeDistribuidoraController.delete);

module.exports = router;
