const { AtorController } = require('../../controller/Ator/AtorController');
const router = require("express").Router();

router.post('/', AtorController.post);
router.get('/', AtorController.getAll);

module.exports = router;