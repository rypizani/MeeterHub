const { AtorController } = require('../../controller/Ator/AtorController');
const router = require("express").Router();

router.post('/', AtorController.post);
router.get('/', AtorController.getAll);
router.get('/:atorId', AtorController.getById);
router.put('/:atorId', AtorController.put);
router.delete('/:atorId', AtorController.delete);

module.exports = router;