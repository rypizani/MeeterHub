const { Ator } = require('../../models/Ator/Ator');

exports.AtorController = {
    
    async post (req, res){
        const { nome } = req.body;
        try{
            const ator = await Ator.create({
                nome
            } )
            return res.status(201).json(ator);
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao criar ator "});
        }
    },
    
    async getAll (req, res){
        try{
            const ator = await Ator.findAll();
            res.status(201).json({ator});
        } catch (error) {
            res.status(500).json({message: 'Erro ao buscar ator'})
        }
    }
}