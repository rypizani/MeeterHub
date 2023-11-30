const router = require("express").Router();
const { registroController } = require('../../controller/login/LoginController');

router.post('/', registroController.delete);

module.exports = router;