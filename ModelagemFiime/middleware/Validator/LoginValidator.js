const { body,validationResult  } = require('express-validator');

exports.LoginValidator = [
    body('nome').isString().isLength({min:2 , max: 64 }).not().isEmpty(),
    body('tp_login').isInt().isLength({min:1, max: 1}).not().isEmpty(),
    body('password').isString().isLength({min:6, max: 64}).not().isEmpty(),
    (req,res,next) => {
        const erros = validationResult(req);
        if(!erros.isEmpty()){
            return res.status(400).json({ erros : erros.array()});
        } 
        next()
    }
]