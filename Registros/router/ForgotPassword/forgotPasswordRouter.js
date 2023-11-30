const router = require("express").Router();
const { forgotPasswordController } = require('../../controller/forgotPassword/forgotPasswordController');

router.post('/', forgotPasswordController.sendEmailToken);

module.exports = router;