const ModeloDistribuidora = require('../models/distribuidoraModel')

class DistribuidoraController{

    async criarDistribuidora(req, res) {

        // Aqui se carrega o idUsuario do front
        // Id de user 2 para não administrador e 3 para administrador
        const idUsuario = 2;
        const validacao = await acesso.autorizarTipoLogin(idUsuario, res);

        if(validacao){

            const distribuidora = req.body;
            
            try {
                const idDistribuidora = await ModeloDistribuidora.criarDistribuidora(distribuidora);
                res.status(201).json({ id_distribuidora: idDistribuidora });
            } catch (erro) {
                res.status(500).json({ erro: "Erro ao criar uma Distribuidora" });
            }
        }
    }

    async obterTodasDistribuidoras(req, res) {

        // Aqui se carrega o idUsuario do front
        // Id de user 2 para não administrador e 3 para administrador
        const idUsuario = 2;
        const validacao = await acesso.autorizarTipoLogin(idUsuario, res);

        if(validacao){

            try {
                const distribuidoras = await ModeloDistribuidora.obterTodasDistribuidoras();
                res.status(200).json(distribuidoras);
            } catch (erro) {
                res.status(500).json({ erro: 'Erro ao buscar todas Distribuidoras' });
            }
        }
    }

    async obterDistribuidoraPorId(req, res) {
        const id = req.params.id;
        
        // Aqui se carrega o idUsuario do front
        // Id de user 2 para não administrador e 3 para administrador
        const idUsuario = 2;
        const validacao = await acesso.autorizarTipoLogin(idUsuario, res);

        if(validacao){

            try {
                const distribuidora = await ModeloDistribuidora.obterDistribuidoraPorId(id);
                
                if (distribuidora) {
                    res.status(200).json(distribuidora);
                } else {
                    res.status(404).json({ erro: 'Distribuidora não encontrado' });
                }

            } catch (erro) {
                res.status(500).json({ erro: 'Erro ao buscar distribuidora' });
            }
        }
    }

    async atualizarDistribuidora(req, res) {
        const id = req.params.id;
        const distribuidora = req.body;

        // Aqui se carrega o idUsuario do front
        // Id de user 2 para não administrador e 3 para administrador
        const idUsuario = 2;
        const validacao = await acesso.autorizarTipoLogin(idUsuario, res);

        if(validacao){

            try {
                const resultado = await ModeloDistribuidora.atualizarDistribuidora(id, distribuidora);
                
                if (resultado) {
                    res.status(200).json({ msg: 'Distribuidora atualizado com sucesso' });
                } else {
                    res.status(404).json({ erro: 'Distribuidora não encontrado' });
                }
            } catch (erro) {
                res.status(500).json({ erro: 'Erro ao atualizar Distribuidora' });
            }
        }
    }

    async excluirDistribuidora(req, res) {
        const id = req.params.id;

        // Aqui se carrega o idUsuario do front
        // Id de user 2 para não administrador e 3 para administrador
        const idUsuario = 2;
        const validacao = await acesso.autorizarTipoLogin(idUsuario, res);

        if(validacao){

            try {
                const resultado = await ModeloDistribuidora.excluirDistribuidora(id);
                
                if (resultado) {
                    res.status(200).json({ msg: 'Distribuidora excluído com sucesso' });
                } else {
                    res.status(404).json({ erro: 'Distribuidora não encontrado' });
                }
            } catch (erro) {
                res.status(500).json({ erro: 'Erro ao excluir Distribuidora' });
            }
        }
    }
}

module.exports  = new DistribuidoraController();