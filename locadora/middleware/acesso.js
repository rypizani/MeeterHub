const ModeloLogin = require('../models/loginModel')

class Acesso {

    constructor(){
    }

    async autorizarTipoLogin(idUsuario, res) {
        try {

            const login = await ModeloLogin.obterLoginsPorId(idUsuario); 

            // Autorizando todos os tipos de login iguais a 1
            if(login.tp_login === '1' ){
                return true                
            } else {
                res.status(403).json({ erro: 'Acesso não autorizado' });
                return false;
            }
          
        } catch (erro) {
            console.error('Erro ao obter tipo de login:', erro);
            return false;
        }
    }
}

module.exports = new Acesso();