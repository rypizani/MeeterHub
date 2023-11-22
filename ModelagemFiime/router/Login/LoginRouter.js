const { LoginController }  = require('../../controller/Login/LoginController');
const router = require("express").Router();

const { LoginValidator }= require('../../middleware/Validator/LoginValidator');



router.get('/', LoginController.getAll);
router.get('/:loginId', LoginController.getById);
router.post('/', LoginValidator, LoginController.post);
router.put('/:loginId', LoginValidator, LoginController.put);
router.delete('/:loginId', LoginController.delete);
/*
    Nâo utilize essse codigo endemoniado
router.get('/nome/:nome', async (req, res) => {
    const { nome } = req.params;
  
    try {
      const login = await LoginController.getLoginByNome(nome);
  
      if (login) {
        res.status(200).json(login);
      } else {
        res.status(404).json({ message: 'Login não encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  });*/

module.exports = router;