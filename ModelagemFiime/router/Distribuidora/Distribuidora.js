const { DistribuidoraController } = require('../../controller/Distribuidora/DistribuidoraController');
const router = require("express").Router();

router.post('/', DistribuidoraController.post);
router.get('/', DistribuidoraController.getAll);
router.get('/:distribuidoraId', DistribuidoraController.getById);
router.put('/:distribuidoraId', DistribuidoraController.put);
router.delete('/:distribuidoraId', DistribuidoraController.delete)

module.exports = router;