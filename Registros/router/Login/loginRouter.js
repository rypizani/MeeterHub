const router = require("express").Router();
const { LoginController } = require('../../controller/login/LoginController');
const LoginValidator = require('../../middleware/Validator/LoginValidator');

router.post('/', LoginValidator, LoginController.accessByEmailAndComparePassword);

module.exports = router;