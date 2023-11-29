const { RegistroController } = require('../../controller/Registro/RegistroController');
const router = require("express").Router();
const RegistroValidator = require('../../middleware/Validator/RegistroValidator');
const { login } = require('../../middleware/Validator/Login')

router.post('/', RegistroValidator, RegistroController.post);
router.get('/', RegistroController.getAll);
router.get('/:registroId', RegistroController.getById);
router.put('/:registroId', RegistroController.put);
router.delete('/:registroId', RegistroValidator, RegistroController.delete);
router.get('/email/:email', RegistroController.getByEmail);
router.get('/login/:email/:senha', RegistroController.getByEmailAndComparePassword)
/* Codigo a ser atualizado contem erro
router.get('/recurso-protegido/:email/:senha', login, async (req, res) => {
    const { email, senha } = req.params;

    try {
        const resultado = await RegistroController.getByEmailAndComparePassword(email, senha);

        if (resultado.sucesso) {
            res.status(200).json({ mensagem: resultado.mensagem, registro: resultado.registro });
        } else {
            res.status(401).json({ mensagem: resultado.mensagem });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
});*/

module.exports = router;