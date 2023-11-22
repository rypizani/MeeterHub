const { Login } = require('../../models/Login/Login');

exports.LoginController = {
    async getAll (req,res){
        try {
            const login = await Login.findAll();
            res.status(201).json({login});
        } catch (error) {
            res.status(500).json({menssage: 'Erro ao buscar o login'})
        }
    }
}