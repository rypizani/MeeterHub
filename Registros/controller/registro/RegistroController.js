const { Registro } = require('../../models/Registro/Registro');
const bcrypt = require('bcrypt');

exports.RegistroController = {

    async post (req,res){
        const { nome, email, endereco, senha, CEP } = req.body;
        try{
            const hashedPassword = await bcrypt.hash(senha, 10)
            const registro = await Registro.create({                
                nome,
                email,
                endereco,
                senha: hashedPassword,
                CEP
            })
            return res.status(201).json(registro);
        } catch (erro) {
            res.status(500).json({erro: "Erro ao criar registro"})
        }
    },

    async getAll (req, res){
        try{
            const registro = await  Registro.findAll();
            res.status(201).json({registro});
        } catch (erro) {
            res.status(500).json({message: 'Erro ao buscar registro'})
        }
    },

    async getById (req,res){
        const registroId = req.params.registroId;
        try {
            const registro = await Registro.findByPk(registroId)
            // fazer find by registro;
            if(registro){
                return res.status(200).json(registro);
            } else {
                return res.status(404).json({menssage: 'Registro não encontrado'});
            }
        } catch (error) {
            res.status(500).json({menssage: 'Erro ao buscar o registro'})
        }
    },

    async put (req, res){
        const registroId = req.params.registroId;
        const{ nome, email, endereco, CEP }= req.body;
        try {
            const registro = await Alocacoes.findByPk(registroId);
            if(registro){
                await registro.update({               
                    nome,
                    email,
                    endereco,
                    CEP
                });
                res.status(200).json(registro);
            } else {
                res.status(404).json({menssage: 'Registro não encontrado'});
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao atualizar um registro" });
        }
    },

    async delete (req, res){
        const registroId = req.params.registroId;
        try {
            const registro = await Registro.findByPk(registroId);
            if(registro){
                await registro.destroy();
                res.status(204).json({menssage: 'Excluido com sucesso'})
            } else {
                res.status(404).json({menssage: 'Registro não encontrado'})
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao excluir um registro" });
        }
    }
}