const { GeneroController } = require('../../controller/Genero/GeneroController');
const router = require("express").Router();



router.get('/',GeneroController.getAll);
router.get('/:generoId', GeneroController.getById);
router.post('/', GeneroController.post);
router.put('/:generoId', GeneroController.put);
router.delete('/:generoId', GeneroController.delete);

module.exports = router;