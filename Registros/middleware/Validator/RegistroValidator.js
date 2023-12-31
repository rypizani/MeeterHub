const { body, validationResult } = require('express-validator');

const validarRegistro = [
    body('nome')
        .isString().withMessage('O nome deve ser uma string')
        .isLength({ min: 3, max: 64 }).withMessage('O nome deve ter entre 2 e 64 caracteres'),

    body('email')
        .isEmail().withMessage('O email deve ser um endereço de email válido')
        .isLength({ min: 5, max: 64 }).withMessage('O email deve ter entre 5 e 64 caracteres'),

    body('senha')
        .isString().withMessage('A senha deve ser uma string')
        .isLength({ min: 6, max: 64 }).withMessage('A senha deve ter entre 6 e 64 caracteres'),

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

module.exports = validarRegistro;