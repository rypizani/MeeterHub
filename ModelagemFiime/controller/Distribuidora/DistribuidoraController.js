const { Distribuidora } = require('../../models/Distribuidora/Distribuidora');

exports.DistribuidoraController = {

    async post (req, res) {
        const { nome } = req.body;
        try {
            const distribuidora = await Distribuidora.create({nome});
            return res.status(201).json(distribuidora);
        } catch (erro) {
            res.status(500).json({erro: "Erro ao criar distribuidora"});
        }
    },

    async getAll (req, res) {
        try {
            const distribuidora = await Distribuidora.findAll();
            res.status(201).json({distribuidora});
        }    catch (erro) {
            res.status(500).json({message: 'Erro ao buscar distribuidora'});
        }
    },

    async getById (req, res) {

        const distribuidoraId = req.params.distribuidoraId;
        try {
            const distribuidora = await Distribuidora.findByPk(distribuidoraId);

            if(distribuidora){
                return res.status(200).json(distribuidora);
            } else {
                return res.status(404).json({message: 'Distribuidora não encontrada'});
            }
        } catch (erro) {
            res.status(500).json({message: "Erro ao buscar a distribuidora"})
        }
    },

    async put (req, res){
        const distribuidoraId = req.params.filmeId;
        const{ nome }= req.body;
        try {
            const distribuidora = await Distribuidora.findByPk(distribuidoraId);
            if(distribuidora){
                await distribuidora.update({nome});
                res.status(200).json(distribuidora);
            } else {
                res.status(404).json({menssage: 'Distribuidora não encontrado'});
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao atualizar a distribuidora" });
        }
    },

    async delete (req, res){
        const distribuidoraId = req.params.distribuidoraId;
        try {
            const distribuidora = await Distribuidora.findByPk(distribuidoraId);
            if(distribuidora){
                await distribuidora.destroy();
                res.status(204).json({menssage: 'Excluido com sucesso'})
            } else {
                res.status(404).json({menssage: 'Distribuidora não encontrada'})
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao excluir um distribuidora" });
        }
    }
}