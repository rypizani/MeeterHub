const { Ator } = require('../../models/Ator/Ator');

exports.AtorController = {

    async post (req,res){
        const { nome } = req.body;
        try{
            const ator = await Ator.create({nome})
            return res.status(201).json(ator);
        } catch (erro) {
            res.status(500).json({erro: "Erro ao criar ator"})
        }
    },

    async getAll (req, res){
        try{
            const ator = await  Ator.findAll();
            res.status(201).json({ator});
        } catch (erro) {
            res.status(500).json({message: 'Erro ao buscar ator'})
        }
    },

    async getById (req,res){
        const atorId = req.params.atorId;
        try {
            const ator = await Ator.findByPk(atorId)
            // fazer find by ator;
            if(ator){
                return res.status(200).json(ator);
            } else {
                return res.status(404).json({menssage: 'Ator não encontrado'});
            }
        } catch (error) {
            res.status(500).json({menssage: 'Erro ao buscar o ator'})
        }
    },

    async put (req, res){
        const atorId = req.params.atorId;
        const{ nome }= req.body;
        try {
            const ator = await Ator.findByPk(atorId);
            if(ator){
                await ator.update({nome});
                res.status(200).json(ator);
            } else {
                res.status(404).json({menssage: 'Ator não encontrado'});
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao atualizar um ator" });
        }
    },

    async delete (req, res){
        const atorId = req.params.atorId;
        try {
            const ator = await Ator.findByPk(atorId);
            if(ator){
                await ator.destroy();
                res.status(204).json({menssage: 'Excluido com sucesso'})
            } else {
                res.status(404).json({menssage: 'Ator não encontrado'})
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao excluir um ator" });
        }
    }
}