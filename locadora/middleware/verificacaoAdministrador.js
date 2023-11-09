const verificacaoAdmin = (req, res, next) => {
    const { login } = req; // assumindo que as informações do usuário estão disponíveis em req.user
  
    if (!login || login.tp_login !== '1') {
      return res.status(403).json({ error: 'Acesso não autorizado' });
    }
  
    next();
  };

module.exports = new verificacaoAdmin();