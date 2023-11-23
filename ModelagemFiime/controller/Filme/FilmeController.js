const { Filme } = require('../../models/Filme/Filme');

exports.FilmeController = {
    
    async post (req, res){
        const { nome } = req.body;
        try{
            const filme = await Filme.create({
                nome
            } )
            return res.status(201).json(filme);
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao criar filme "});
        }
    },
    
    async getAll (req, res){
        try{
            const filme = await Filme.findAll();
            res.status(201).json({filme});
        } catch (error) {
            res.status(500).json({message: 'Erro ao buscar filme'})
        }
    },

    async getById (req,res){
        const filmeId = req.params.filmeId;
        try {
            const filme= await Filme.findByPk(filmeId)
            // fazer find by email;
            if(filme){
                return res.status(200).json(filme);
            } else {
                return res.status(404).json({menssage: 'Filme não encontrado'});
            }
        } catch (error) {
            res.status(500).json({menssage: 'Erro ao buscar o filme'})
        }
    },

    async put (req, res){
        const filmeId = req.params.filmeId;
        const{ nome }= req.body;
        try {
            const filme = await Filme.findByPk(filmeId);
            if(filme){
                await filme.update({nome});
                res.status(200).json(filme);
            } else {
                res.status(404).json({menssage: 'Filme não encontrado'});
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao atualizar um Filme" });
        }
    },

    async delete (req, res){
        const filmeId = req.params.filmeId;
        try {
            const filme = await Filme.findByPk(filmeId);
            if(filme){
                await filme.destroy();
                res.status(204).json({menssage: 'Excluido com sucesso'})
            } else {
                res.status(404).json({menssage: 'Filme não encontrado'})
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao excluir um Filme" });
        }
    }


}