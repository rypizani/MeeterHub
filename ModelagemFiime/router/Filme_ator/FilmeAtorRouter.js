const { FilmeAtorController } = require('../../controller/Filme_ator/Filme_AtorController');
const router = require("express").Router();

router.get('/',FilmeAtorController.getAll);
router.get('/:filmeAtorId', FilmeAtorController.getById);
router.post('/', FilmeAtorController.post);
router.put('/:filmeAtorId', FilmeAtorController.put);
router.delete('/:filmeAtorId', FilmeAtorController.delete);

module.exports = router;