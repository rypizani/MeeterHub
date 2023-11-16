const login = require('../models/loginModel');

const verificarAcesso = async (req, res, next) => {

  // Id de user 2 para não administrador e 3 para administrador
  const idUsuario = 3;

  try {
    const usuario = await login.obterLoginsPorId(idUsuario);

    if (usuario && usuario.tp_login === '1') {
      next(); 
    } else {
      res.status(403).json({ erro: 'Acesso não autorizado.' });
    }
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao verificar acesso.' });
  }
};

module.exports = verificarAcesso;