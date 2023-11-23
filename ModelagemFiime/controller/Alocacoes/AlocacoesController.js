const { Alocacoes } = require('../../models/Alocacoes/Alocacoes');

exports.AlocacoesController = {

    async post (req,res){
        const { nome } = req.body;
        try{
            const alocacoes = await Alocacoes.create({nome})
            return res.status(201).json(alocacoes);
        } catch (erro) {
            res.status(500).json({erro: "Erro ao criar alocacoes"})
        }
    },

    async getAll (req, res){
        try{
            const alocacoes = await  Alocacoes.findAll();
            res.status(201).json({alocacoes});
        } catch (erro) {
            res.status(500).json({message: 'Erro ao buscar alocacoes'})
        }
    },

    async getById (req,res){
        const alocacoesId = req.params.alocacoesId;
        try {
            const alocacoes = await Alocacoes.findByPk(alocacoesId)
            // fazer find by alocacoes;
            if(alocacoes){
                return res.status(200).json(alocacoes);
            } else {
                return res.status(404).json({menssage: 'Alocacoes não encontrado'});
            }
        } catch (error) {
            res.status(500).json({menssage: 'Erro ao buscar o alocacoes'})
        }
    },

    async put (req, res){
        const alocacoesId = req.params.alocacoesId;
        const{ nome }= req.body;
        try {
            const alocacoes = await Alocacoes.findByPk(alocacoesId);
            if(alocacoes){
                await alocacoes.update({nome});
                res.status(200).json(alocacoes);
            } else {
                res.status(404).json({menssage: 'Alocacoes não encontrado'});
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao atualizar um alocacoes" });
        }
    },

    async delete (req, res){
        const alocacoesId = req.params.alocacoesId;
        try {
            const alocacoes = await Alocacoes.findByPk(alocacoesId);
            if(alocacoes){
                await alocacoes.destroy();
                res.status(204).json({menssage: 'Excluido com sucesso'})
            } else {
                res.status(404).json({menssage: 'Alocacoes não encontrado'})
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao excluir um alocacoes" });
        }
    }
}