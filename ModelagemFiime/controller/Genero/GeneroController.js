const { Genero } = require('../../models/Genero/Genero');

exports.GeneroController = {

     
    async post (req, res){
        const { nome } = req.body;
        try{
            const genero = await Genero.create({
                nome
            } )
            return res.status(201).json(genero);
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao criar genero "});
        }
    },
 
      
    async getAll (req, res){
        try{
            const genero = await Genero.findAll();
            res.status(201).json({genero});
        } catch (error) {
            res.status(500).json({message: 'Erro ao buscar genero'})
        }
    },

    async getById (req,res){
        const generoId = req.params.generoId;
        try {
            const genero = await Genero.findByPk(generoId)
            // fazer find by email;
            if(genero){
                return res.status(200).json(genero);
            } else {
                return res.status(404).json({menssage: 'Genero não encontrado'});
            }
        } catch (error) {
            res.status(500).json({menssage: 'Erro ao buscar o genero'})
        }
    },

    async put (req, res){
        const generoId = req.params.generoId;
        const{ nome }= req.body;
        try {
            const genero = await Genero.findByPk(generoId);
            if(genero){
                await genero.update({nome});
                res.status(200).json(genero);
            } else {
                res.status(404).json({menssage: 'Genero não encontrado'});
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao atualizar um Genero" });
        }
    },


    async delete (req, res){
        const generoId = req.params.generoId;
        try {
            const genero = await Genero.findByPk(generoId);
            if(genero){
                await genero.destroy();
                res.status(204).json({menssage: 'Excluido com sucesso'})
            } else {
                res.status(404).json({menssage: 'Genero não encontrado'})
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao excluir um Genero" });
        }
    }
}