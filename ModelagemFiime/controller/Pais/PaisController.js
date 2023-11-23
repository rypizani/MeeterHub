const { Pais } = require('../../models/Pais/Pais');

exports.PaisController = {

    async post (req,res){
        const { nome } = req.body;
        try{
            const pais = await Pais.create({nome})
            return res.status(201).json(pais);
        } catch (erro) {
            res.status(500).json({erro: "Erro ao criar pais"})
        }
    },

    async getAll (req, res){
        try{
            const pais = await  Pais.findAll();
            res.status(201).json({pais});
        } catch (erro) {
            res.status(500).json({message: 'Erro ao buscar pais'})
        }
    },

    async getById (req,res){
        const paisId = req.params.paisId;
        try {
            const pais = await Pais.findByPk(paisId)
            // fazer find by pais;
            if(pais){
                return res.status(200).json(pais);
            } else {
                return res.status(404).json({menssage: 'Pais não encontrado'});
            }
        } catch (error) {
            res.status(500).json({menssage: 'Erro ao buscar o pais'})
        }
    },

    async put (req, res){
        const paisId = req.params.paisId;
        const{ nome }= req.body;
        try {
            const pais = await Pais.findByPk(paisId);
            if(pais){
                await pais.update({nome});
                res.status(200).json(pais);
            } else {
                res.status(404).json({menssage: 'Pais não encontrado'});
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao atualizar um pais" });
        }
    },

    async delete (req, res){
        const paisId = req.params.paisId;
        try {
            const pais = await Pais.findByPk(paisId);
            if(pais){
                await pais.destroy();
                res.status(204).json({menssage: 'Excluido com sucesso'})
            } else {
                res.status(404).json({menssage: 'Pais não encontrado'})
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao excluir um pais" });
        }
    }
}