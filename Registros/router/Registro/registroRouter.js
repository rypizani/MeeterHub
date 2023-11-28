const { RegistroController } = require('../../controller/registro/RegistroController');
const router = require("express").Router();
const RegistroValidator = require('../../middleware/Validator/RegistroValidator');

router.post('/', RegistroValidator, RegistroController.post);
router.get('/', RegistroController.getAll);
router.get('/:registroId', RegistroController.getById);
router.put('/:registroId', RegistroController.put);
router.delete('/:registroId', RegistroController.delete)

module.exports = router;