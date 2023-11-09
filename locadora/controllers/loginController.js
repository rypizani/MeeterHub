const ModeloLogin = require('../models/loginModel')

class LoginController{
    
    async criarLogin(req, res) {
        const login = req.body;
        try {
            const idlogin = await ModeloLogin.criarLogin(login);
            res.status(201).json({ id_Login: idlogin });
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao criar um Login" });
        }
    }

    async obterTodosLogins(req, res) {
        try {
            const logins = await ModeloLogin.obterTodosLogins();
            res.status(200).json(logins);
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar todos Logins' });
        }
    }

    async obterLoginsPorId(req, res) {
        const id = req.params.id;
        try {
            const login = await ModeloLogin.obterLoginsPorId(id);
            if (login) {
                res.status(200).json(login);
            } else {
                res.status(404).json({ erro: 'Login não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar Login' });
        }
    }

    async atualizarLogin(req, res) {
        const id = req.params.id;
        const login = req.body;
        try {
            const resultado = await ModeloLogin.atualizarLogin(id, login);
            if (resultado) {
                res.status(200).json({ msg: 'Login atualizado com sucesso' });
            } else {
                res.status(404).json({ erro: 'Login não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao atualizar Login' });
        }
    }

    async excluirLogin(req, res) {
        const id = req.params.id;
        try {
            const resultado = await ModeloLogin.excluirLogin(id);
            if (resultado) {
                res.status(200).json({ msg: 'Login excluído com sucesso' });
            } else {
                res.status(404).json({ erro: 'Login não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao excluir Login' });
        }
    }

}
module.exports  = new LoginController();