const { FilmeGeneroController } = require('../../controller/Filme_genero/Filme_GeneroController');
const router = require("express").Router();

router.get('/', FilmeGeneroController.getAll);
router.get('/:filmeGenerooId', FilmeGeneroController.getById);
router.post('/', FilmeGeneroController.post);
router.put('/:filmeGeneroId', FilmeGeneroController.put);
router.delete('/:filmeGeneroId', FilmeGeneroController.delete);

module.exports = router;