const { LoginController } = require('../../controller/login/LoginController');
const router = require("express").Router();
const LoginValidator = require('../../middleware/Validator/LoginValidator')

router.post('/', LoginValidator, LoginController.accessByEmailAndComparePassword);

module.exports = router;