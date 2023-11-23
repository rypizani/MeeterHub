const { PaisController } = require('../../controller/Pais/PaisController');
const router = require("express").Router();

router.post('/', PaisController.post);
router.get('/', PaisController.getAll);
router.get('/:paisId', PaisController.getById);
router.put('/:paisId', PaisController.put);
router.delete('/:paisId', PaisController.delete)

module.exports = router;