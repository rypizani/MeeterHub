const ModeloLogin = require('../models/loginModel')

class Acesso {

    constructor(){
    }

    async autorizarTipoLogin(idUsuario) {
        try {
            const login = await ModeloLogin.obterLoginsPorId(idUsuario);
            // Autorizando todos os tipos de login iguais a 1
            if(login.tp_login === '1' ){
                return true                
            } else {
                return false;
            }
          
        } catch (erro) {
            console.error('Erro ao obter tipo de login:', erro);
            return null;
        }
    }

}

module.exports = new Acesso();