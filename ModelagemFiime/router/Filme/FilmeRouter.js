const { FilmeController }  = require('../../controller/Filme/FilmeController');
const router = require("express").Router();



router.get('/', FilmeController.getAll);
router.get('/:filmeId', FilmeController.getById);
router.post('/', FilmeController.post);
router.put('/:filmeId', FilmeController.put);
router.delete('/:filmeId', FilmeController.delete);

module.exports = router;