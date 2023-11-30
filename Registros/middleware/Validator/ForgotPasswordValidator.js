const { body, validationResult } = require('express-validator');

const validarForgotPassword = [
    body('email')
        .isString().withMessage('O email deve ser uma string')
        .isLength({ min: 6, max: 64 }).withMessage('O email deve ter entre 6 e 64 caracteres'),

    (req, res, next) => {
        //Teste para ver se o middleware está funcionando
        console.log("Entrou");
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() });
        }
        next();
    }
];

module.exports = validarForgotPassword;