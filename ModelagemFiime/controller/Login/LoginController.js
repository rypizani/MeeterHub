const { Login } = require('../../models/Login/Login');

exports.LoginController = {
    async getAll (req,res){
        try {
            const login = await Login.findAll();
            res.status(201).json({login});
        } catch (error) {
            res.status(500).json({menssage: 'Erro ao buscar o login'})
        }
    },


    /*
    Nâo utilize essse codigo endemoniado
    async getLoginByNome(nome) {
        try {
          const login = await Login.findOne({
            where: { nome },
          });
      
          if (login) {
            return login.dataValues;
          } else {
            return null;
          }
        } catch (error) {
          console.error(error);
          throw error;
        }
      },*/

    async getById (req,res){
        const loginId = req.params.loginId;
        try {
            const login = await Login.findByPk(loginId)
            // fazer find by email;
            if(login){
                return res.status(200).json(login);
            } else {
                return res.status(404).json({menssage: 'Login não encontrado'});
            }
        } catch (error) {
            res.status(500).json({menssage: 'Erro ao buscar o login'})
        }
    },

    async post (req, res){
        const { password, tp_login, nome } = req.body;
        try {
            const login = await Login.create({
                password, tp_login, nome
            } )
            return res.status(201).json(login);
        } catch (error) {
            res.status(500).json({ erro: "Erro ao criar um Login" });
        }

    },

    async put (req, res){
        const loginId = req.params.loginId;
        const{ password, tp_login, nome }= req.body;
        try {
            const login = await Login.findByPk(loginId);
            if(login){
                await login.update({password, tp_login, nome});
                res.status(200).json(login);
            } else {
                res.status(404).json({menssage: 'Login não encontrado'});
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao atualizar um Login" });
        }
    },

    async delete (req, res){
        const loginId = req.params.loginId;
        try {
            const login = await Login.findByPk(loginId);
            if(login){
                await login.destroy();
                res.status(204).json({menssage: 'Excluido com sucesso'})
            } else {
                res.status(404).json({menssage: 'Login não encontrado'})
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao excluir um Login" });
        }
    }


}