const router = require("express").Router();
const { forgotPasswordController } = require('../../controller/forgotPassword/forgotPasswordController');
const forgotPasswordValidator = require('../../middleware/Validator/ForgotPasswordValidator');

router.post('/', forgotPasswordValidator, forgotPasswordController.sendEmailToken);

module.exports = router;